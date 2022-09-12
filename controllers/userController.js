const { user, Thought} = require("../models");

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
    getSingleuser(req, res) {
        user.findOne({ _id: req.params.courseId })
          .select('-__v')
          .populate("friends")
          .populate("thoughts")
          .then((dbUserData) => {
          if (!dbUserData)  {
            return res.status (404).json({ message: 'No user with that ID' })
          }
          res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
