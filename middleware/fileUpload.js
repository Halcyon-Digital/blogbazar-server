const uploader = require("../utils/fileUploader");

const uploadImage = (req, res, next) => {
  const upload = uploader(
    ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    1000000,
    "Only .webp, .jpg, jpeg or .png format allowed!"
  );

  // call the middleware function
  upload.single("file")(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};
module.exports = { uploadImage };
