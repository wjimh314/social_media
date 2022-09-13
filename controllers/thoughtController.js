const {
    Thought,
    User
} = require("../models");

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
            .sort({
                createdAt: -1
            })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    getSingleThought(req, res) {
        Thought.findOne({
                _id: req.params.thoughtId
            })
            .then((dbThoughtData) => {
                if (!dbThoughtData)  {
                    return res.status(404).json({
                        message: "No thought with this id!"
                    });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User / findOneUpdate({
                    _id: req.body.userID
                }, {
                    $push: {
                        thoughts: dbThoughtData._id
                    }
                }, {
                    new: true
                });
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no user id"
                    })
                }
                res.json({
                    message: "thought created"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            });
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $set: req.body
            }, {
                runValidators: true,
                new: true
            }, )
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no thought with this id"
                    })
                }
                res.json({
                    message: "thought created"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            });
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove({
                _id: req.params.thoughtId
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no thought with this id"
                    })
                }
                res.json({
                    message: "thought delete"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            });
    },
    addReaction(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $addToset: {
                    reactions: req.body
                }
            }, {
                runValidators: true,
                new: true
            }).then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no thought with this id"
                    })
                }
                res.json({
                    message: "thought delete"
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            });
    },






    removeReaction(req, res) {
        Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            }, {
                $pull: { reactions: {reactionID: req.params.reactionId}
                }
            }, {
                runValidators: true,
                new: true
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({
                        message: "no thought with this id"
                    });
                }
                res.json(dbThoughtData);

            })

            .catch((err) => {
                console.log(err);
                res.status(500).json(err);

            });
    },
};
modolue.exports - thoughtController;