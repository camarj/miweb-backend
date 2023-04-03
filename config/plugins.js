module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "noreply@diftinto.com",
        defaultReplyTo: "noreply@diftinto.com",
      },
    },
  },
});
