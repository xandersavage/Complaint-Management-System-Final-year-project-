const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    remark: {
      type: String
    },
    status: {
      type: String,
      enum: ["Ongoing", "Resolved"],
      default: "Ongoing"
    },
    type: {
      type: String,
      required: true,
      enum: ["Academic", "Non-Academic"]
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium"
    },
    attachments: [
      {
        data: Buffer, // Buffer to store the binary data of the image
        contentType: String // MIME type of the image
      }
    ],
    resolvedAt: {
      type: Date
    },
    author: {
      //This field EXISTS in the DB
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
