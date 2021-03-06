const proxy = require("http-proxy-middleware")



module.exports = function(app) {
    app.use(
        proxy("/api/user",{
            target: "http://localhost:8000",
            // secure: false,
            changeOrigin: true
        })
    )

    app.use(
        proxy("/users/current/accounts",{
            target: "https://mt-provisioning-api-v1.agiliumtrade.agiliumtrade.ai",
            // secure: false,
            changeOrigin: true
        })
    )
}