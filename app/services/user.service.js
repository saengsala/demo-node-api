import models from '../models';

const User = models.User;

const createUser = async (req) => {
    const data = {
        ...req.body
        , createdAt: new Date()
        , updatedAt: new Date()
    };
    return await User.create(data);
}

const findAllUsers = async () => {
    return await User.findAll();
}

const findUserById = async (req) => {
    const userId = req.params.id;
    return await User.findAll({
        where: {
            id: userId
        }
    });
}

const updateUser = async (req) => {
    const userId = req.params.id;
    const data = {
        ...req.body
        , updatedAt: new Date()
    };
    await User.update(data, {
        where: {
            id: userId
        }
    });
    return await User.findAll({
        where: {
            id: userId
        }
    });
}

const deleteUser = async (req) => {
    const userId = req.params.id;
    return await User.destroy({
        where: {
            id: userId
        }
    });
}

module.exports = {
    createUser
    , findAllUsers
    , findUserById
    , updateUser
    , deleteUser
}
