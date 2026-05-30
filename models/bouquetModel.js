import { buildPaginatedResponse } from "../helpers/pagination.js";
import { loadDb } from "../helpers/jsonDb.js";

export function findPaginated({ page, perPage }) {
    const db = loadDb();
    const bouquets = db.products ?? [];
    return buildPaginatedResponse(bouquets, { page, perPage });
}