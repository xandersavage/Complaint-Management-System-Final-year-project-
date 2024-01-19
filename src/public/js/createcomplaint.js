import axios from "axios";
import { showAlert } from "./alerts";

export const createNewComplaint = async (
  type,
  priority,
  title,
  description
) => {
  // console.log(email, password)
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/complaints/submit",
      data: {
        type,
        priority,
        title,
        description
      }
    });

    if (res.status === 201) {
      showAlert("success", "Complaint created successfully!");
      window.setTimeout(() => {
        location.assign("/mycomplaints");
        // console.log("browser");
      }, 1500);
    }
    console.log(res);
  } catch (e) {
    showAlert("error", "Error creating complaint. Try again");
  }
};
