import axios from "axios";
import { showAlert } from "./alerts";

export const createNewUser = async (
  name,
  age,
  email,
  password,
  college,
  department
) => {
  // console.log(email, password)
  try {
    const res = await axios({
      method: "POST",
      url: "https://fupresugcms.onrender.com/users/register", // http://127.0.0.1:3000/users/register
      data: {
        name,
        age,
        email,
        password,
        college,
        department
      }
    });

    if (res.status === 201) {
      showAlert("success", "User created successfully!");
      window.setTimeout(() => {
        location.assign("/dashboard");
        // console.log("browser");
      }, 1500);
    }
    console.log(res);
  } catch (e) {
    showAlert("error", e);
  }
};
