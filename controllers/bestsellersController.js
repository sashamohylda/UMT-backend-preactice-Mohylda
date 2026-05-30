import { HTTP_STATUS } from "../constants/httpStatus.js";
import { asyncHandler } from "../helpers/asyncHandler.js";
import * as bestsellerModel from "../models/bestsellerModel.js";

export const getBestsellerList = asyncHandler(async (req, res) => {
    const result = bestsellerModel.findAll();
    res.status(HTTP_STATUS.OK).json(result);
});