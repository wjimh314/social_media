const router = require('express').router();

const {
    getThoughts,
    getThoughtbyId,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThoughts);
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);
router.route("/:thoughtId/reactions").post(addReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;
