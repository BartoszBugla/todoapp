const withImages = require("next-images");

const next = {
    presets: [
        [
            "next/babel",
            {
                "preset-env": {
                    modules: "commonjs",
                    debug: true,
                },
            },
        ],
    ],
    plugins: [["inline-svg"]],
};
const path = require("path");
module.exports = {
    env: {
        mongoURI:
            "mongodb+srv://Admin:Admin@learning-zc5e1.mongodb.net/test?retryWrites=true&w=majority",
        jwtsecret: "sl_myJwtSecret",
    },
    exportPathMap: function () {
        return {
            "/": { page: "/" },
            "/register": { page: "/register" },
            "/dashboard": { page: "/dashboard" },
            "/404": { page: "/404" },
        };
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
module.exports = withImages({
    exclude: path.resolve(__dirname, "/components/svg"),
    webpack(config, options) {
        return config;
    },
});
