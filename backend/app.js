const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Header",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
  });

app.use("/product", (req, res, next) => {
  const produk = [
    {
      id: "lasdfasf",
      name: "PProduk Satu",
      description: "Satu",
      imageUrl:
        "https://cf.shopee.com.my/file/d73b9df04af03e20ee50e0b527ffd34d",
      price: 49.99
    },
    {
      id: "kjjkkjn",
      name: "Produk Dua",
      description: "Dua",
      imageUrl:
        "https://cf.shopee.com.my/file/0137558cf1487471707119a2cdaa890b",
      price: 39.99
    },
    {
      id: "lasdfasf",
      name: "PProduk Satu",
      description: "Satu",
      imageUrl:
        "https://cf.shopee.com.my/file/d73b9df04af03e20ee50e0b527ffd34d",
      price: 49.99
    },
    {
      id: "kjjkkjn",
      name: "Produk Dua",
      description: "Dua",
      imageUrl:
        "https://cf.shopee.com.my/file/0137558cf1487471707119a2cdaa890b",
      price: 39.99
    }
  ];
  res.status(200).json({
    message: "Produk fetched success!",
    produk: produk
  });
});

module.exports = app;
