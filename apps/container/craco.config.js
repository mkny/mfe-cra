const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

const plugin1 = new ModuleFederationPlugin({
  name: "container",
  remotes: {
    app1: "app1@http://localhost:3001/remoteEntry.js",
    app2: "app2@http://localhost:3002/remoteEntry.js"
  },
  shared: packageJson.dependencies,
});

module.exports = {
  webpack: {
    plugins: {
      add: [
        [plugin1, "append"]
      ]
    },
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        output: {
          publicPath: "auto",
        }
      };
    }
  }
}
