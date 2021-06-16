'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  createPaymentIntent: async (ctx) => {
    const {cart} = ctx.request.body

    let games = []

    await Promise.all(
      cart?.map(async ( game) => {
        const validateGame = await strapi.services.game.findOne({id: game.id})

        if (validateGame) {
          games.push(validateGame)
        }
      })
    );

    if(!games.length) {
      ctx.response.status = 404;
      return {
        error: 'No valid games found!'
      }
    }

    return games
  },
};
