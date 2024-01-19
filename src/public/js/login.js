import axios from "axios";
import { showAlert } from "./alerts";

export const login = async (email, password) => {
  // console.log(email, password)
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/users/login",
      data: {
        email,
        password
      }
    });

    if (res.status === 200) {
      showAlert("success", "Logged in successfully!!");
      window.setTimeout(() => {
        location.assign("/dashboard");
        // console.log("browser");
      }, 1500);
    }
    console.log(res);
  } catch (e) {
    showAlert("error", "Incorrect email or password");
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://127.0.0.1:3000/users/Logout"
    });
    if (res.status === 200) location.assign("/");
  } catch (e) {
    showAlert("error", "Error logging out");
  }
};
