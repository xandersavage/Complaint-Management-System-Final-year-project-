import axios from "axios";
import { showAlert } from "./alerts";

export const resolveComplaint = async (complaintId, remark) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `https://fupresugcms.onrender.com/admin/complaints/${complaintId}`,
      data: {
        remark
      }
    });

    if (res.status === 200) {
      showAlert("success", "Complained Resolved!");
      window.setTimeout(() => {
        location.assign("/resolved-complaints");
        // console.log("browser");
      }, 1500);
    }
    //console.log(res);
  } catch (e) {
    showAlert("error", "Unable to resolve complaint. Contact Support");
  }
};
