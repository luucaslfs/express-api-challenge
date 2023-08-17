const ratingController = require("../../controllers/ratingController");
const { Rating: RatingModel } = require("../../models/Rating");
const { Content: ContentModel } = require("../../models/Content");

// Mocking external dependencies
jest.mock("../../models/Rating");
jest.mock("../../models/Content");

describe("Rating Controller - Rate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create rating successfully", async () => {
    const mockReq = {
      user: {
        userId: "mockedUserId",
      },
      body: {
        value: 5,
      },
      params: {
        id: "mockedContentId",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockRating = {
      user: mockReq.user.userId,
      value: mockReq.body.value,
      content: mockReq.params.id,
      _id: "mockedRatingId",
    };

    RatingModel.create = jest.fn().mockResolvedValue(mockRating);
    ContentModel.findByIdAndUpdate = jest.fn().mockResolvedValue({});

    await ratingController.rate(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      newRating: mockRating,
      msg: "Classificação criada com sucesso!",
    });
  });

  test("should handle unexpected error during rating", async () => {
    const mockReq = {
      user: {
        userId: "mockedUserId",
      },
      body: {
        value: 5,
      },
      params: {
        id: "mockedContentId",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    RatingModel.create = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await ratingController.rate(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao classificar.",
    });
  });
});
