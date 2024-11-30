import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const contactSchema = new Schema({
    name: {type:String},
    email: {type: String},
    message:{type: String}
},
{
    timestamps: true,
});

contactSchema.plugin(toJSON);

export const ContactModel = model('Contact', contactSchema)