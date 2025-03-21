
import CryptoJS from "crypto-js";
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
// const SECRET_KEY = "hellokitty";

export const encryptPassword = (password) => {
    return CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
};