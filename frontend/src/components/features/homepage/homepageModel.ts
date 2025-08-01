import { FormLogin } from "./homepageController";

export async function loginUser(data: FormLogin) {
  console.log("Logging in with data:", data);
  if(data.Email) {
    return "success"
  }

}