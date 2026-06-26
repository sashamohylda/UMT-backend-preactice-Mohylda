import Joi from "joi";
import { commonJoiMessages } from "../constants/messages.js";

export const createFeedbackSchema = Joi.object({
    rating: Joi.number().integer().min(1).max(5).required().label("Rating"),
    text: Joi.string().trim().min(10).max(2000).required().label("Text"),
    author: Joi.string().trim().min(2).max(100).required().label("Author"),
    location: Joi.string().trim().min(2).max(100).required().label("Location"),
}).messages(commonJoiMessages);

export const updateFeedbackSchema = Joi.object({
    rating: Joi.number().integer().min(1).max(5).label("Rating"),
    text: Joi.string().trim().min(10).max(2000).label("Text"),
    author: Joi.string().trim().min(2).max(100).label("Author"),
    location: Joi.string().trim().min(2).max(100).label("Location"),
})
    .min(1)
    .messages(commonJoiMessages);