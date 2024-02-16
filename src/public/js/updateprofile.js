import axios from "axios";
import { showAlert } from "./alerts";

export const updateProfile = async (name, email, age, college, department) => {
  // console.log(email, password)
  try {
    const res = await axios({
      method: "PATCH",
      url: "https://fupresugcms.onrender.com/users/profile",
      data: {
        name,
        email,
        age,
        college,
        department
      }
    });

    if (res.status === 200) {
      showAlert("success", "Updated Successfully!");
      window.setTimeout(() => {
        location.assign("/dashboard");
        // console.log("browser");
      }, 1500);
    }
    // console.log(res);
  } catch (e) {
    showAlert("error", "Error Updating. Try again later");
  }
};
