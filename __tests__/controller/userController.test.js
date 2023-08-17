// tests/unit/userController.test.js

const userController = require("../../controllers/userController");
const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");

// Mocking external dependencies
jest.mock("../../models/User");
jest.mock("bcrypt");

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

    // Adjusted mocking for bcrypt functions
    bcrypt.genSalt = jest.fn(() => Promise.resolve("randomsalt"));
    bcrypt.hash = jest.fn(() => Promise.resolve("hashedpassword"));

    // Adjusted mocking for UserModel's create function
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
});
