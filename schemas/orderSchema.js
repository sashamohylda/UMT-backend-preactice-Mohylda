import Joi from "joi";
import { commonJoiMessages } from "../constants/messages.js";

export const createOrderSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).required().label("Name"),
    phone: Joi.string().trim().min(10).max(30).required().label("Phone"),
    address: Joi.string().trim().min(5).max(200).required().label("Delivery address"),
    comment: Joi.string().trim().max(500).allow("").default("").label("Comment"),
    bouquetId: Joi.number().integer().positive().allow(null).default(null).label("Bouquet"),
}).messages(commonJoiMessages);

export const updateOrderSchema = Joi.object({
    name: Joi.string().trim().min(2).max(100).label("Name"),
    phone: Joi.string().trim().min(10).max(30).label("Phone"),
    address: Joi.string().trim().min(5).max(200).label("Delivery address"),
    comment: Joi.string().trim().max(500).allow("").label("Comment"),
    bouquetId: Joi.number().integer().positive().allow(null).label("Bouquet"),
})
    .min(1)
    .messages(commonJoiMessages);