import mongoose, { Schema } from "mongoose";

const enquiryShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquiryShema);

export default Enquiry;
