import { HTTP_STATUS } from "../constants/httpStatus.js";
import { asyncHandler } from "../helpers/asyncHandler.js";
import * as bestsellerModel from "../models/bestsellerModel.js";

export const getBestsellersList = asyncHandler(async (_req, res) => {
  const bestsellers = await bestsellerModel.findAll();
  res.status(HTTP_STATUS.OK).json(bestsellers);
});