import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype != "image/png" &&
      file.mimetype != "image/jpg" &&
      file.mimetype != "image/jpeg"
      //   file.mimetype != "GIF"
    ) {
      return cb(
        new multer.MulterError(
          "Arquivo deve ser um dos seguintes formatos: png, jpg, jpeg ou gif"
        )
      );
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve("uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
