const commentController = require("../../controllers/commentController");
const { Comment: CommentModel } = require("../../models/Comment");
const { Content: ContentModel } = require("../../models/Content");

// Mocking external dependencies
jest.mock("../../models/Comment");
jest.mock("../../models/Content");

describe("Comment Controller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should create comment successfully", async () => {
    const mockReq = {
      user: {
        userId: "mockedUserId",
      },
      body: {
        text: "Mocked comment text",
      },
      params: {
        id: "mockedContentId",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockComment = {
      user: mockReq.user.userId,
      text: mockReq.body.text,
      content: mockReq.params.id,
      _id: "mockedCommentId",
    };

    CommentModel.create = jest.fn().mockResolvedValue(mockComment);
    ContentModel.findByIdAndUpdate = jest.fn().mockResolvedValue({});

    await commentController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      newComment: mockComment,
      msg: "Comentário criado com sucesso!",
    });
  });

  test("should handle unexpected error during comment creation", async () => {
    const mockReq = {
      user: {
        userId: "mockedUserId",
      },
      body: {
        text: "Mocked comment text",
      },
      params: {
        id: "mockedContentId",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    CommentModel.create = jest
      .fn()
      .mockRejectedValue(new Error("Database error"));

    await commentController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      msg: "Erro ao criar comentário.",
    });
  });

  test("should retrieve comments by content successfully", async () => {
    const mockReq = {
      params: {
        id: "mockedContentId",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const mockComments = [
      {
        _id: "mockedCommentId1",
        text: "Comment 1",
        user: { username: "user1" },
      },
      {
        _id: "mockedCommentId2",
        text: "Comment 2",
        user: { username: "user2" },
      },
    ];

    CommentModel.find = jest.fn().mockReturnThis();
    CommentModel.populate = jest.fn().mockResolvedValue(mockComments);

    await commentController.getCommentsByContent(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(mockComments);
  });
});
