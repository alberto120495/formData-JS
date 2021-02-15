import express from "express";
import multer from "multer";
import path from "path";

//app config
const app = express();
const port = process.env.PORT || 9000;

//upload config
const upload = multer({
  dest: "../images/",
});

//API routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve("../index.html"));
});

app.post("/", upload.single("image"), (req, res) => {
  console.log(req.file);
  console.log(req.body.username);
  res.status(200);
});

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
