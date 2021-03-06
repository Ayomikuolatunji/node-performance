"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const blockOperation = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {
    }
};
app.get("/", (req, res) => {
    res.send(`performance ${process.pid}`);
});
app.get("/goods", (req, res) => {
    res.send(`performance ${process.pid}`);
});
app.get("/timer", (req, res) => {
    blockOperation(9000);
    res.send(`it would be delay ${process.pid}`);
});
app.listen(8080, () => {
    console.log("app running on localhost 8080");
});
