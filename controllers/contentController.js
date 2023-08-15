const { Content: ContentModel } = require("../models/Content");

const contentController = {
  create: async (req, res) => {
    try {
      const contentData = {
        name: req.body.name,
        description: req.body.description,
        year: req.body.year,
        type: req.body.type,
        numberOfSeasons: req.body.numberOfSeasons,
        numberOfEpisodes: req.body.numberOfEpisodes,
      };

      const response = await ContentModel.create(contentData);
      res.status(201).json({ response, msg: "Conteúdo criado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao criar conteúdo" });
    }
  },

  getAll: async (req, res) => {
    try {
      const contents = await ContentModel.find();
      res.json(contents);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao buscar conteúdos" });
    }
  },

  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const content = await ContentModel.findById(id);

      if (!content) {
        res.status(404).json({ msg: "Conteúdo não encontrado" });
        return;
      }

      res.json(content);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao buscar conteúdo" });
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedContent = await ContentModel.findByIdAndDelete(id);

      if (!deletedContent) {
        res.status(404).json({ msg: "Conteúdo não encontrado" });
        return;
      }

      res
        .status(200)
        .json({ deletedContent, msg: "Conteúdo deletado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao deletar conteúdo" });
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const updateData = {
        name: req.body.name,
        description: req.body.description,
        year: req.body.year,
        type: req.body.type,
        numberOfSeasons: req.body.numberOfSeasons,
        numberOfEpisodes: req.body.numberOfEpisodes,
      };

      if (
        !updateData.name ||
        !updateData.year ||
        !updateData.description ||
        !updateData.type
      ) {
        return res.status(400).json({
          msg: "Todos os campos são obrigatórios para a atualização completa.",
        });
      }

      const updatedContent = await ContentModel.findByIdAndUpdate(
        id,
        updateData,
        { new: true }
      );
      res
        .status(200)
        .json({ updatedContent, msg: "Conteúdo atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar conteúdo" });
    }
  },

  patch: async (req, res) => {
    try {
      const contentId = req.params.id;
      const updateData = req.body;
      const updatedContent = await ContentModel.findByIdAndUpdate(
        contentId,
        updateData,
        { new: true }
      );

      if (!updatedContent) {
        res.status(404).json({ msg: "Conteúdo não encontrado" });
        return;
      }

      res
        .status(200)
        .json({ updatedContent, msg: "Conteúdo atualizado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao atualizar conteúdo" });
    }
  },
};

module.exports = contentController;
