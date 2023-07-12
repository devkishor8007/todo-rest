"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postgres_1 = __importDefault(require("postgres"));
const postgres_js_1 = require("drizzle-orm/postgres-js");
const schema_1 = require("./schema");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
const client = (0, postgres_1.default)({ ssl: "require" });
const db = (0, postgres_js_1.drizzle)(client);
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield db.select().from(schema_1.cities);
    console.log("asd");
    // res.json({ data, asd: "dsf" });
    res.send("asd");
}));
// postgres://kishor:GLf08CBFKQnN@ep-little-star-894269.us-east-2.aws.neon.tech/neondb
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
// drizzle;
