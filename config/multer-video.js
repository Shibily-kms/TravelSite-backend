const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Public/Video");
    },
    filename: (req, file, cb) => {
        cb(null, 'Shibi.mp4');
    },
});

module.exports = uploadVideo = multer({ storage: storage });