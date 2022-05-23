"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const BlockOperation = (duration) => {
    const start = Date.now();
    while (Date.now() - start < duration) {
    }
};
app.get("/", (req, res) => {
    res.send("performance");
});
app.get("/timer", (req, res) => {
});
app.listen(8080, () => {
    console.log("app running on localhost 8080");
});
