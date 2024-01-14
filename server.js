const MONGO_URI =
  "mongodb+srv://barteknitschke89:ZFE5vd8JToUPBK4y@cluster.ixwyyzh.mongodb.net/";

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/products", productRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(4200, () => {
      console.log("listening on port", 4200);
    });
  })
  .catch((err) => {
    console.log(err);
  });
