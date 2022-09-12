const {
    user,
    Thought,
    User
} = require("../models");

const userController = {
    // Get all users
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    getSingleUser(req, res) {
        user.findOne({
                _id: req.params.courseId
            })
            .select('-__v')
            .populate("friends")
            .populate("thoughts")
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: 'No user with that ID'
                    })
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUser(req, res) {
        User.findOneAndUpdate({
                _id: req.params.userId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true,
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: 'No user with this id!'
                    });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    deleteUser(req, res) {
        User.findOneAndDelete({
                _id: req.params.userId
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "No user with that ID"
                    });
                }
            })
            .then(() => {
                res.json({
                    message: "user deleted"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });

    },

    addFriend(req.res) {
        User.findOneAndUpdate({
                _id: req.params.userID
            }, {
                $addToSet: {
                    friends: req.params.friendID
                }
            }, {
                new: true
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no user found"
                    });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    removeFriend(req, res) {
        User.findOneAndUpdate({
                _id: req.params.userId
            }, {
                $pull: {
                    friends: req.params.friendId
                }
            }, {
                new: true
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no user found"
                    });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};

module.exports = userController;