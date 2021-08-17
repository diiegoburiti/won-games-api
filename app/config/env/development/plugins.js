module.exports = ({ env }) => ({
  email: {
    provider: "nodemailer",
    providerOptions: {
      host: "127.0.0.1",
      port: 1025,
      ignoreTLS: true,
    },
  },
});