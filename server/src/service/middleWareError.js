module.exports = {
    errorMiddleware: function(error, req, res, next) {
        const status = error.status || 500;
        const message = error.message || "An internal error occured";
        res.status(status).json({
            status,
            message,
        });
    }
}
