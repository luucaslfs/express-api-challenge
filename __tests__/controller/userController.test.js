// tests/unit/userController.test.js

const userController = require("../../controllers/userController");
const { User: UserModel } = require("../../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Mocking external dependencies
jest.mock("../../models/User");
jest.mock("bcrypt");

const mockCreate = jest.fn();

mongoose.model = jest.fn().mockReturnValue({
  create: mockCreate,
});

describe("User Controller - Create", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should register user successfully", async () => {
    const mockReq = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mocking bcrypt functions
    bcrypt.genSalt = jest.fn(() => Promise.resolve("randomsalt"));
    bcrypt.hash = jest.fn(() => Promise.resolve("hashedpassword"));

    // Mocking UserModel's create function
    UserModel.create = jest.fn().mockResolvedValue({
      username: mockReq.body.username,
      password: "hashedpassword",
    });

    await userController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "User registered successfully.",
    });
  });

  test("should respond with error if username is not provided", async () => {
    const mockReq = {
      body: {
        // Intentionally missing username
        password: "testpassword",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await userController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(422);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Username is required.",
    });
  });

  test("should handle unexpected error during user registration", async () => {
    const mockReq = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    UserModel.create = jest.fn().mockRejectedValue(new Error("Database error"));

    await userController.create(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "An error occurred while registering the user.",
    });
  });
});
