import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
console.log(aleatorio());

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve("uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
