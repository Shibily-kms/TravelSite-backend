const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Public/Images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

module.exports = upload = multer({ storage: storage });