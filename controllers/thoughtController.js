const { Thought, User } = require ("..models");

const thoughtController ={
    getThoughts (req, res) {
        Thought.find({})
        .then(dbThoughtData)
    }
}