const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

const plugin1 = new ModuleFederationPlugin({
  name: "app1",
  filename: "remoteEntry.js",
  exposes: {
    "./Appname": "./src/App",
  },
  // remotes: { app2: "app2@http://localhost:3001/remoteEntry.js" },
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