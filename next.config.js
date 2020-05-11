const withImages = require("next-images");

const path = require("path");
module.exports = {
    env: {
        mongoURI:
            "mongodb+srv://Admin:Admin@learning-zc5e1.mongodb.net/test?retryWrites=true&w=majority",
        jwtsecret: "sl_myJwtSecret",
    },
    // exportPathMap: function () {
    //     return {
    //         "/": { page: "/" },
    //         "/register": { page: "/register" },
    //         "/dashboard": { page: "/dashboard" },
    //     };
    // },
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
