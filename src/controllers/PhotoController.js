class PhotoController {
  async store(req, res) {
    try {
      return res.status(200).json(req.file);
    } catch (msg) {
      return res.status(500).json({ msg: "Ops! algo de errado aconteceu." });
    }
  }
}

export default new PhotoController();
