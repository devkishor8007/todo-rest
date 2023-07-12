"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = exports.popularityEnum = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
// declaring enum in database
exports.popularityEnum = (0, pg_core_1.pgEnum)('popularity', ['unknown', 'known', 'popular']);
exports.cities = (0, pg_core_1.pgTable)('cities', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }),
    popularity: (0, exports.popularityEnum)('popularity'),
});
