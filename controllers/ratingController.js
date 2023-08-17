const { Rating: RatingModel } = require("../models/Rating");
const { Content: ContentModel } = require("../models/Content");

const ratingController = {
  rate: async (req, res) => {
    try {
      const rating = {
        user: req.user.userId,
        value: req.body.value,
        content: req.params.id,
      };

      const newRating = await RatingModel.create(rating);

      // Aqui você pode decidir armazenar a média das classificações ou calcular em tempo real sempre que for solicitado.
      // Para simplificar, estou apenas armazenando o novo rating no content.

      await ContentModel.findByIdAndUpdate(req.params.id, {
        $push: { ratings: newRating._id },
      });

      res
        .status(201)
        .json({ newRating, msg: "Classificação criada com sucesso!" });
    } catch (error) {
      res.status(500).json({ msg: "Erro ao classificar." });
    }
  },
};

module.exports = ratingController;
