// controllers/CommentController.js
const { Comment: CommentModel } = require("../models/Comment");
const { Filme: FilmeModel } = require("../models/Filme");

const commentController = {

    create: async (req, res) => {
        try {
            const comment = {
                user: req.user.userId, // Supondo que o user é anexado ao req após autenticação JWT
                text: req.body.text,
                filme: req.params.id,
            };

            const newComment = await CommentModel.create(comment);

            // Opcional: Se você decidir manter a referência no modelo Filme
            await FilmeModel.findByIdAndUpdate(req.params.id, {
                $push: { comments: newComment._id }
            });

            res.status(201).json({ newComment, msg: "Comentário criado com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Erro ao criar comentário." });
        }
    }
}

module.exports = commentController;
