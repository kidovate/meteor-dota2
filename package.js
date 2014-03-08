Package.describe({
  summary: "Access to the API for Dota 2."
});

Package.on_use(function (api, where) {
  api.use("http");
  api.add_files('dota2.js', 'server');
  api.export("Dota2", 'server');
});
