import { buildPaginatedResponse, getPaginationBounds } from "../helpers/pagination.js";
import prisma from "../helpers/prisma.js";

function formatBouquet(bouquet) {
    return {
        ...bouquet,
        id: String(bouquet.id),
    };
}

export async function findPaginated({ page, perPage }) {
    const totalItems = await prisma.bouquet.count();
    const { skip, take } = getPaginationBounds({ page, perPage, totalItems });
    const bouquets = await prisma.bouquet.findMany({
        orderBy: { id: "desc" },
        skip,
        take,
    });
    return buildPaginatedResponse(bouquets, { page, perPage, totalItems });
}

export async function findById(id) {
    const bouquet = await prisma.bouquet.findUnique({
        where: { id },
    });
    return bouquet ? formatBouquet(bouquet) : null;
}

export async function create(data) {
    const bouquet = await prisma.bouquet.create({
        data,
    });
    return formatBouquet(bouquet);
}

export async function update(id, data) {
    const bouquet = await prisma.bouquet.update({
        where: { id },
        data,
    });
    return formatBouquet(bouquet);
}

export async function remove(id) {
    const bouquet = await prisma.bouquet.delete({
        where: { id },
    });
    return formatBouquet(bouquet);
}