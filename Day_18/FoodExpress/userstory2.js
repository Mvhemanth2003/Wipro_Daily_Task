//checking the payments
function getOrder(orderId) {
  return fetch(`http://localhost:5000/orders/${orderId}`)
    .then(res => {
      if (!res.ok) throw new Error("Order not found");
      return res.json();
    });
}

function processPayment(order) {
  return new Promise((resolve, reject) => {
    console.log("Processing payment...");

    setTimeout(() => {
      const success = true; 

      if (success) {
        resolve(`Payment of ₹${order.amount} successful for ${order.item}`);
      } else {
        reject("Payment failed");
      }
    }, 1500);
  });
}



getOrder(101)
  .then(order => {
    console.log("Order fetched:", order);
    // returnded promise
    return processPayment(order); 
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err.message || err);
  });









