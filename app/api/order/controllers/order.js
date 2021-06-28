"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe = require("stripe")(process.env.STRIPE_KEY);

module.exports = {
  createPaymentIntent: async (ctx) => {
    const { cart } = ctx.request.body;

    let games = [];

    if (cart) {
      return await Promise.all(
        cart.map(async (game) => {
          const validatedGame = await strapi.services.game.findOne({
            id: game.id,
          });

          if (validatedGame) {
            games.push(validatedGame);
          }
        })
      );
    }

    if (!games.length) {
      ctx.response.status = 404;
      return {
        error: "No valid games found!",
      };
    }
    const total = games.reduce((acc, game) => {
      return acc + game.price;
    }, 0);

    if (total === 0) {
      return {
        freeGames: true,
      };
    }

    try {
      const paymentIntent = await stripe.paymentIntent.create({
        amount: total * 100,
        currency: "usd",
        metadata: { integration_check: "accept_a_payment" },
      });
      return paymentIntent;
    } catch (error) {
      return {
        error: error.raw.message,
      };
    }
  },

  create: async (ctx) => {
    const {cart, paymentIntentId, paymentMethod} = ctx.request.body;

    const token = await strapi.puglins["users-permitions"].services.jwt.getToken(ctx);

    const userId = token.id;

    const userInfo = await strapi.query("user", "users-permissions").findOne({id: userId})

    return {cart, paymentIntentId, paymentMethod, userInfo}
  }
};
