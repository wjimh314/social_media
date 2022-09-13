const router = require("express").Router();
const { Router } = require("express");
const { route } = require(".");
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,

} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getSingleUser).post(updateUser).delete(removeFriend);
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)

module.exports = router;