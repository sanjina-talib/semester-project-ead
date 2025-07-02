// controllers/orderController.js
const Order = require("../models/Order");

exports.placeOrder = async (req, res) => {
  const { items, total } = req.body;
  try {
    const newOrder = await Order.create({
      userId: req.user,
      items,
      total
    });
    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ msg: "Failed to place order" });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch orders" });
  }
};
