import Joi from "joi";
import { commonJoiMessages } from "../constants/messages.js";

export const getBouquetQuerySchema = Joi.object({
    page: Joi.number().integer().min(1).default(1).label("Page"),
    "per-page": Joi.number().integer().min(1).max(100).default(12).label("Per page"),
}).messages(commonJoiMessages);

const bouquetFields = {
    title: Joi.string().trim().min(2).max(200).required().label("Title"),
    desc: Joi.string().trim().min(10).max(1000).required().label("Description"),
    price: Joi.number().integer().min(1).required().label("Price"),
};

export const createBouquetSchema = Joi.object(bouquetFields).messages(commonJoiMessages);

export const updateBouquetSchema = Joi.object({
    title: bouquetFields.title.optional(),
    desc: bouquetFields.desc.optional(),
    price: bouquetFields.price.optional(),
})
    .min(1)
    .messages(commonJoiMessages);