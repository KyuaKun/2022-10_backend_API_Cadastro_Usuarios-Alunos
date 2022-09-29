class PhotoController {
  async index(req, res) {
    try {
      return res.status(200).json({ msg: "oi" });
    } catch (msg) {
      return res.status(500).json({ msg: "algo aconteceu." });
    }
  }
}

export default new PhotoController();
