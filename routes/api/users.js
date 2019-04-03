const router = require("express").Router();
const ref = require("../../models/database");

// return a list of tags
router.get("/", (req, res, next) => {
  ref.once("value", snapshot => {
    let data = snapshot.val();
    let keys = Object.keys(data.user_profile).slice(0, 50);
    let user_profile = {};
    keys.forEach(key => {
      user_profile[key] = data.user_profile[key];
    });
    return res.json({ user_profile });
  });
});

module.exports = router;
