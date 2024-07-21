const express = require("express");
const { requireSignIn } = require("../controller/userController");
const {
  createPostController,
  getAllPostsController,
  getUserPostsController,
  deletePostController,
  updatePostController,
} = require("../controller/postController");
//  router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSignIn, createPostController);

// GET ALL POSTs
router.get("/get-all-posts", getAllPostsController);

// GET USER POSTs
router.get("/get-user-posts", requireSignIn, getUserPostsController);

// delete post
router.delete("/delete-posts/:id", requireSignIn, deletePostController);
// update post
router.put("/update-posts/:id", requireSignIn, updatePostController);
// export
module.exports = router;
