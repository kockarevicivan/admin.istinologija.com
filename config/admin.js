module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dsfjfjlkj23894u39r082341lj'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'dfsjfdoji2389r4u23894u23'),
  },
});
