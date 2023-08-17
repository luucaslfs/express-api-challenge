const contentController = require("../../controllers/contentController");
const { Content: ContentModel } = require("../../models/Content");
const mongoose = require("mongoose");

// Mocking external dependencies
jest.mock("../../models/Content");

describe("Content Controller - Create", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create content successfully", async () => {
    const mockReq = {
      body: {
        name: "Test Content",
        description: "Test Description",
        year: 2023,
        type: "Filme",
        numberOfSeasons: null,
        numberOfEpisodes: null,
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockContent = {
      ...mockReq.body,
      _id: "mockedId",
      comments: [],
      ratings: [],
    };

    // Mocking ContentModel's create function
    ContentModel.create = jest.fn().mockResolvedValue(mockContent);

    await contentController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      response: mockContent,
      msg: "Conteúdo criado com sucesso!",
    });
  });

  test("should handle unexpected error during content creation", async () => {
    const mockReq = {
      body: {
        name: "Test Content",
        description: "Test Description",
        year: 2023,
        type: "Filme",
        numberOfSeasons: null,
        numberOfEpisodes: null,
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    ContentModel.create = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await contentController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao criar conteúdo",
    });
  });
});

describe("Content Controller - Retrieval", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should retrieve all contents successfully", async () => {
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    const mockContents = [
      { _id: "mockedId1", name: "Content 1" },
      { _id: "mockedId2", name: "Content 2" },
    ];

    ContentModel.find = jest.fn().mockResolvedValue(mockContents);

    await contentController.getAll({}, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith(mockContents);
  });

  test("should handle unexpected error during getAll contents", async () => {
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    ContentModel.find = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await contentController.getAll({}, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao buscar conteúdos",
    });
  });

  test("should retrieve all movies successfully", async () => {
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    const mockMovies = [
      { _id: "mockedId1", name: "Movie 1", type: "Filme" },
      { _id: "mockedId2", name: "Movie 2", type: "Filme" },
    ];

    ContentModel.find = jest.fn().mockResolvedValue(mockMovies);

    await contentController.getAllMovies({}, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith(mockMovies);
  });

  test("should handle unexpected error during getAll movies", async () => {
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    ContentModel.find = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await contentController.getAllMovies({}, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao buscar filmes",
    });
  });

  test("should retrieve all series successfully", async () => {
    const mockRes = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    const mockSeries = [
      { _id: "mockedId1", name: "Serie 1", type: "Serie" },
      { _id: "mockedId2", name: "Serie 2", type: "Serie" },
    ];

    ContentModel.find = jest.fn().mockResolvedValue(mockSeries);

    await contentController.getAllSeries({}, mockRes);

    expect(mockRes.json).toHaveBeenCalledWith(mockSeries);
  });

  test("should handle unexpected error during getAll series", async () => {
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    ContentModel.find = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await contentController.getAllSeries({}, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao buscar séries",
    });
  });
});
