import multer from "multer";
import multerConfig from "../config/multer";
import PhotoModel from "../models/PhotoModel";

const upload = multer(multerConfig).single("photo");

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.code });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      try {
        const photo = await PhotoModel.create({
          originalname,
          filename,
          aluno_id,
        });

        return res.status(200).json(photo);
      } catch (msg) {
        return res.status(400).json({
          error: "algo inesperado aconteceu",
        });
      }
    });
  }
}

export default new PhotoController();
