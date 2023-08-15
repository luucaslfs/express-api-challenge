const { Comment: CommentModel } = require("../models/Comment");
const { Content: ContentModel } = require("../models/Content");

const commentController = {
  create: async (req, res) => {
    try {
      const comment = {
        user: req.user.userId,
        text: req.body.text,
        content: req.params.id,
      };

      const newComment = await CommentModel.create(comment);

      await ContentModel.findByIdAndUpdate(req.params.id, {
        $push: { comments: newComment._id },
      });

      res
        .status(201)
        .json({ newComment, msg: "Comentário criado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao criar comentário." });
    }
  },
  getCommentsByContent: async (req, res) => {
    try {
      const comments = await CommentModel.find({
        content: req.params.id,
      }).populate("user", "username"); // populate() is used to get the user's username
      res.status(200).json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao buscar comentários." });
    }
  },
};

module.exports = commentController;
