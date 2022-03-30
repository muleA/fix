module.exports = {
  apps : [{
    name   : "back-office-service-store",
    script : "node_modules/@nrwl/cli/bin/nx.js",
    automation: false,
    args: "serve 'back-office-service-store'",
  }]
}