// Path: ./config/env/production/server.js

module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://miweb-backend.herokuapp.com/"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
