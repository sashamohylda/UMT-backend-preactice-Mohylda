import Joi from "joi";
import { commonJoiMessages } from "../constants/messages.js";

export const getBouquetQuerySchema = Joi.object({
    page: Joi.number().integer().min(1).default(1).label("Сторінка"),
    "per-page": Joi.number().integer().min(1).max(100).default(12).label("Кількість на сторінці"),
}).messages(commonJoiMessages);