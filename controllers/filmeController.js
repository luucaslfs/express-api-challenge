const { Filme: FilmeModel } = require("../models/Filme");

const filmeController = {

    create: async (req, res) => {
        try {

            const filme = {
                name: req.body.name,
                description: req.body.description,
                year: req.body.year,
                cover: req.body.cover,
            };

            const response = await FilmeModel.create(filme);

            res.status(201).json({ response, msg: "Filme criado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = filmeController;