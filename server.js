const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-shopping-cart-db",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  console.log("server app.get /api/products")
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
    console.log("server app.post /api/products")
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    console.log("server app.delete /api/products/:id")
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const Order = mongoose.model("order", new mongoose.Schema({
  _id:{
    type: String,
    default: shortid.generate
  },
  email:String,
  name:String,
  address:String,
  total:Number,
  cartItems:[
    {
      _id: String,
      title: String,
      price: Number,
      count: Number
    },
  ],
},
{
    timestamps: true,
}))

app.post("/api/orders", async(req, res)=>{
  if(!req.body.name ||
     !req.body.email ||
     !req.body.address ||
     !req.body.total ||
     !req.body.cartItems
     ){
       return res.send({message: "Data is required."})
     }
     const order = await Order(req.body).save()
     res.send(order)
})

const port = process.env.PORT || 5000;
app.listen(port, 
    () => console.log("serve at http://localhost:5000"));