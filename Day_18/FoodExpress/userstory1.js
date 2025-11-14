//Order Retrieval
function fetchOrder(orderId, callback) {
  fetch(`http://localhost:5000/orders/${orderId}`)
    .then(res => {
      if (!res.ok) return callback("Order not found", null);
      return res.json();
    })
    .then(data => callback(null, data))
    .catch(() => callback("Server error", null));
}

// USING CALLBACK
fetchOrder(101, (err, data) => {
  if (err) console.log(err);
  else console.log("Order fetched:", data);
});

