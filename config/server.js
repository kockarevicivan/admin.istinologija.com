module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
	url: "https://admin.istinologija.com",
  app: {
    keys: env.array('APP_KEYS', ['dfsjo23u89dfkh289u298']),
  },
});
