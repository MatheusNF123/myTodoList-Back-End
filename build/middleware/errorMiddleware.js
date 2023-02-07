"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddleError {
}
exports.default = MiddleError;
MiddleError.errorMidleware = (err, req, res, _next) => {
    console.log(`caiu no middleware de erro ${err.message}`);
    res.status(err.status || 500).json({ message: err.message });
};
