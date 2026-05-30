import { loadDb } from "../helpers/jsonDb.js";

export function findAll() {
    const db = loadDb();
    return db.bestsellers ?? [];
}