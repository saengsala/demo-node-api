import userService from '../services/user.service'

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req);
    return res.status(201).json({
      status: 201
      , data: user
    });
  } catch (e) {
    return res.status(500).json({
      status: 500
      , message: `Internal Server Error.`
    });
  }
}

const findAllUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    return res.status(200).json({
      status: 200
      , data: users
    });
  } catch (e) {
    return res.status(500).json({
      status: 500
      , message: `Internal Server Error.`
    });
  }
}

const findUserById = async (req, res) => {
  try {
    const user = await userService.findUserById(req, res);
    if (user.length === 0) {
      return res.status(404).json({
        status: 404
        , message: `User not found.`
      });
    }
    return res.status(200).json({
      status: 200
      , data: user
    });
  } catch (e) {
    return res.status(500).json({
      status: 500
      , message: `Internal Server Error.`
    });
  }
}

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req);
    return res.status(201).json({
      status: 201
      , data: user
    });
  } catch (e) {
    return res.status(500).json({
      status: 500
      , message: `Internal Server Error.`
    });
  }
}

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req);
    return res.status(204).json({});
  } catch (e) {
    return res.status(500).json({
      status: 500
      , message: `Internal Server Error.`
    });
  }
}

module.exports = {
  createUser
  , findAllUsers
  , findUserById
  , updateUser
  , deleteUser
}
