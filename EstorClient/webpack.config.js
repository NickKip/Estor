const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');

const buildTime = new Date().valueOf();
const version = "0.0.1";

let mode = "development";
let filename = "Estor.dev";
let isIe = false;

if (process.argv.includes("-p")) {

    mode = "production";
    filename = "Estor.prod"
}

if (process.argv.includes("-ie")) {

    isIe = true;
    filename = `Estor.ie${mode === "development" ? "" : ".prod"}`;
}

console.log("\x1b[33m%s\x1b[0m", `Building for ${mode} (IE: ${isIe})...`);

function scssImporter(url, prev, done) {

    if (url && url.length > 3 && url.substring(0,3) !== "src") {

        url = `src/${url}`;
    }

   if (fs.existsSync(url)) {

       done({ file: url });
   }
   else {

       done({ contents: "" });
   }
}

const entry = {
    app: ["./src/index.ts"]
}

const plugins = [new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("production"),
    "__BUILD__": JSON.stringify(buildTime),
    "__VERSION__": JSON.stringify(version)
})];

const optimization = {};

if (mode === "production") {

    plugins.push(new UglifyJSPlugin());
}

// Standard rules that are needed for all builds
const rules = [

    // .less loader
    { test: /\.less$/, use: [{ loader: "css-to-string-loader" }, { loader: "css-loader?url=false" }, { loader: "less-loader" }] },

    // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
    { test: /\.tsx?$/, loader: "awesome-typescript-loader", options: { configFileName: isIe ? "tsconfig-ie11.json" : "tsconfig.json" } },

    { test: /\.(?:png|jpg|svg)$/, loader: "url-loader" },

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
];

// Customised to non IE builds
if (!isIe) {

    // Not using IE, we can split up the JS into packages
    optimization.splitChunks = {

        chunks: "async",
        name: true,
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendors",
                chunks: "all"
            }
        }
    };

    rules.push(
        // All files with a '.scss' extension will be handled by our scss loader
        { test: /\.scss$/, use: [{ loader: "css-to-string-loader" }, { loader: "css-loader?url=false" }, { loader: "sass-loader", options: { includePaths: ["src"], importer: scssImporter } }] }
    );
} 

// Customised for IE build
if (isIe) {

    // Extract IE styles into their own file
    rules.push(
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{ loader: "css-loader?url=false" }, { loader: "sass-loader", options: { includePaths: ["src"], importer: scssImporter } }]
            })
        }
    );

    // Use babel to transform the JS imported from node_modules to be usable in IE (mainly lit-html)
    rules.push(
        {
            test: /\.jsx?$/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    );

    // Create the IE dedicated stylesheet
    plugins.push(new ExtractTextPlugin("./css/styles.ie11.css"));
    plugins.push(new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }));
}

module.exports = {

    mode: mode,

    entry: entry,

    output: {
        filename: `js/${filename}.[name].js`,
        chunkFilename: `js/${filename}.[name].js`,
        path: path.join(__dirname, "build"),
        publicPath: isIe ? "/js/" : "/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: mode !== "production" ? "inline-source-map" : false,

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss", ".less"],
        modules: [
            (__dirname + "/src"),
            "node_modules"
        ]
    },

    module: {
        rules: rules
    },

    plugins: plugins,

    optimization: optimization,

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "moment": "moment"
    }
};
