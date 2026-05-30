import { HTTP_STATUS } from "../constants/httpStatus.js";
import { asyncHandler } from "../helpers/asyncHandler.js";
import * as bouquetModel from "../models/bouquetModel.js";

export const getBouquetList = asyncHandler(async (req, res) => {
    const { page, "per-page": perPage } = req.validateQuery;

    const result = bouquetModel.findPaginated({
        page,
        perPage,
    });

    res.status(HTTP_STATUS.OK).json(result);
});