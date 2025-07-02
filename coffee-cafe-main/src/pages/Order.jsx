import React, { useState } from "react";

const coffeeMenu = [
  { id: 1, name: "Espresso", description: "Strong and bold espresso shot.", price: 80, image: "https://tse2.mm.bing.net/th/id/OIP.dByRjIi_hqH-mFGU4-mkPwHaE8?pid=Api&P=0&h=220" },
  { id: 2, name: "Cappuccino", description: "Espresso with steamed milk and foam.", price: 120, image: "https://tse2.mm.bing.net/th/id/OIP.Pe-S01F7qQmyT8Md6QyK_wHaE8?pid=Api&P=0&h=220" },
  { id: 3, name: "Latte", description: "Smooth espresso with steamed milk.", price: 100, image: "https://tse4.mm.bing.net/th/id/OIP.NLirL4b2nZP8tedzYk4dbAHaJQ?pid=Api&P=0&h=220" },
  { id: 4, name: "Americano", description: "Espresso with hot water.", price: 90, image: "https://tse1.mm.bing.net/th/id/OIP.BSP4bZJ0kWXLzrBgU_L0IQHaE8?pid=Api&P=0&h=220" },
  { id: 5, name: "Mocha", description: "Espresso with chocolate and steamed milk.", price: 130, image: "https://tse2.mm.bing.net/th/id/OIP.yafb08gfL7PRY2cqppbC-wHaEq?pid=Api&P=0&h=220" },
  { id: 6, name: "Macchiato", description: "Espresso with a dollop of foam.", price: 95, image: "https://tse1.mm.bing.net/th/id/OIP.PlTbhfrSauCYiipXu3DUmQHaE8?pid=Api&P=0&h=220" },
  { id: 7, name: "Flat White", description: "Espresso with microfoam.", price: 110, image: "https://www.nespresso.com/ncp/res/uploads/recipes/flatwhiteBR.jpg" },
  { id: 8, name: "Irish Coffee", description: "Coffee with Irish whiskey and cream.", price: 150, image: "https://tse2.mm.bing.net/th/id/OIP.kkNJjJvSFzcwRQq3QPT3YgHaIg?pid=Api&P=0&h=220" },
  { id: 9, name: "Iced Coffee", description: "Chilled coffee over ice.", price: 85, image: "https://tse1.mm.bing.net/th/id/OIP.ugaxD7RhYLmZLScvlaPNbQHaHa?pid=Api&P=0&h=220" },
  { id: 10, name: "Affogato", description: "Vanilla ice cream with hot espresso.", price: 140, image: "https://tse2.mm.bing.net/th/id/OIP.GOimCJw37FKEkImQWdDiDQHaJQ?pid=Api&P=0&h=220" },
  { id: 11, name: "Cold Brew", description: "Smooth cold steeped coffee.", price: 105, image: "https://tse1.mm.bing.net/th/id/OIP.mdPvujEXvddWQzZFPIxf2gHaLH?pid=Api&P=0&h=220" },
  { id: 12, name: "Turkish Coffee", description: "Finely ground coffee brewed in a pot.", price: 135, image: "https://tse3.mm.bing.net/th/id/OIP.QHRONZ8rY2OhKF4AoWqlhAHaHa?pid=Api&P=0&h=220" },
];

const Order = () => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (coffee) => {
    const exist = cart.find((item) => item.id === coffee.id);
    if (exist) {
      setCart(cart.map(item => item.id === coffee.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...coffee, qty: 1 }]);
    }
  };

  const removeFromCart = (coffeeId) => {
    const exist = cart.find((item) => item.id === coffeeId);
    if (exist.qty === 1) {
      setCart(cart.filter((item) => item.id !== coffeeId));
    } else {
      setCart(cart.map(item => item.id === coffeeId ? { ...item, qty: item.qty - 1 } : item));
    }
  };

  const removeAllOfItem = (coffeeId) => {
    setCart(cart.filter(item => item.id !== coffeeId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleOrderDone = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add some coffee!");
      return;
    }
    setShowModal(true);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-secondary/10 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-secondary">Order Your Coffee</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Coffee Cards */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {coffeeMenu.map((coffee) => (
            <div key={coffee.id} className="bg-white shadow-md rounded-xl p-4 text-center">
              <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover rounded-md mb-3" />
              <h2 className="text-xl font-semibold">{coffee.name}</h2>
              <p className="text-sm text-gray-500">{coffee.description}</p>
              <p className="font-bold text-primary mt-2">₹{coffee.price}</p>
              <button
                onClick={() => addToCart(coffee)}
                className="mt-3 px-4 py-2 rounded-full text-white bg-primary hover:bg-primary/90 transition"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-white shadow-lg p-6 rounded-xl h-fit sticky top-10">
          <h2 className="text-2xl font-bold mb-4 text-secondary">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">No items in your order.</p>
          ) : (
            <>
              <ul className="space-y-3 mb-4 max-h-80 overflow-y-auto">
                {cart.map((item) => (
                  <li key={item.id} className="border-b pb-2 flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">−</button>
                      <span className="w-6 text-center">{item.qty}</span>
                      <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 rounded">+</button>
                      <button onClick={() => removeAllOfItem(item.id)} className="bg-gray-400 text-white px-2 rounded text-xs ml-2">x</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mt-2">
                <p className="font-bold text-lg">Total: ₹{total}</p>
                <button
                  onClick={clearCart}
                  className="text-sm bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                >
                  Clear Cart
                </button>
              </div>
              <button
                onClick={handleOrderDone}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded-full hover:bg-green-700"
              >
                ✅ Order Done
              </button>
            </>
          )}
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-all">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">🧾 Order Summary</h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <li key={item.id} className="text-gray-700">
                  {item.name} × {item.qty} = ₹{item.price * item.qty}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold text-lg text-right text-primary">Total: ₹{total}</p>

            <div className="mt-4 text-center text-green-600 font-medium">
              Thank you for your order!<br />Please visit us again ☕❤️
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => {
                  setShowModal(false);
                  setCart([]);
                }}
                className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition"
              >
                Done & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
