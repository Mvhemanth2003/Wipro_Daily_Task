// invoice
// Fetch order from mock DB
function getOrder(orderId) {
  return fetch(`http://localhost:5000/orders/${orderId}`)
    .then(res => {
      if (!res.ok) throw new Error("Order not found");
      return res.json();
    });
}

// Invoice generator
function generateInvoice(order) {
  return new Promise(resolve => {
    console.log("Generating invoice...");
    setTimeout(() => {
      resolve(`Invoice generated for Order #${order.id}, Item: ${order.item}, Amount: ₹${order.amount}`);
    }, 1000);
  });
}

// Async/Await flow
async function handleInvoice() {
  try {
     //  fetching from db.json
    const order = await getOrder(101);   
    console.log("Order fetched:", order);
    //  passing real DB data
    const invoice = await generateInvoice(order);  
    console.log(invoice);
  } catch (err) {
    console.log("Invoice error:", err.message);
  }
}

handleInvoice();












