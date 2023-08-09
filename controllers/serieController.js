const { Serie: SerieModel } = require("../models/Serie");

const serieController = {

    create: async (req, res) => {
        try {

            const serie = {
                name: req.body.name,
                description: req.body.description,
                year: req.body.year,
                seasons: req.body.seasons,
                episodes: req.body.episodes,
            };

            const response = await SerieModel.create(serie);

            res.status(201).json({ response, msg: "Serie criado com sucesso!" });

        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const series = await SerieModel.find();

            res.json(series);
        } catch (error) {
            console.log(error);
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id;
            const serie = await SerieModel.findById(id);

            if (!serie) {
                res.status(404).json({ msg: "Serie não encontrado" });
                return;
            }

            res.json(serie);
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedSerie = await SerieModel.findByIdAndDelete(id);

            if (!deletedSerie) {
                res.status(404).json({ msg: "Serie não encontrado" });
                return;
            }

            res.status(200).json({ deletedSerie, msg: "Serie deletado com sucesso!" });
        } catch (error) {
            console.log(error);
        }
    },
    update: async (req, res) => {

        const id = req.params.id;

        const serie = {
            name: req.body.name,
            description: req.body.description,
            year: req.body.year,
            seasons: req.body.seasons,
            episodes: req,
        };

        if (!serie.name || !serie.year || !serie.description) {
            return res.status(400).json({ message: 'Todos os campos são obrigatórios para a atualização completa.' });
        }

        const updatedSerie = await SerieModel.findByIdAndUpdate(id, serie);

        if (!updatedSerie) {
            res.status(404).json({ msg: "Serie não encontrado" });
            return;
        }

        res.status(200).json({ updatedSerie, msg: "Serie atualizado com sucesso!" });
    },
    patch: async (req, res) => {
        try {
            const serieId = req.params.id;
            const updatedSerie = req.body;

            const serie = await SerieModel.findByIdAndUpdate(serieId, updatedSerie);

            if (!serie) {
                res.status(404).json({ msg: "Serie não encontrado" });
                return;
            }

            res.status(200).json({ serie, msg: "Serie atualizado com sucesso!" });

        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar serie" });
        }
    }
}
module.exports = serieController;