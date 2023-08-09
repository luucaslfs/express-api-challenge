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
    getAll: async (req, res) => {
        try {
            const filmes = await FilmeModel.find();

            res.json(filmes);
        } catch (error) {
            console.log(error);
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const filme = await FilmeModel.findById(id);

            if (!filme) {
                res.status(404).json({ msg: "Filme não encontrado" });
                return;
            }

            res.json(filme);
        } catch (error) {
            console.log(error);
        }
    }

module.exports = filmeController;