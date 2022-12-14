"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const cors = require('cors');
class App {
    constructor() {
        this.router = routes_1.default;
        this.app = (0, express_1.default)();
        this.app.use(cors());
        this.app.use(express_1.default.json());
        this.app.get('/', (req, res) => res.json({ ok: true }));
        this.router(this.app);
        this.app.use(errorMiddleware_1.default.errorMidleware);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.App = App;
