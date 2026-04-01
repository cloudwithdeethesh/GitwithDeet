 # Create a simple nodejs file
cat > app.js << 'EOF'
function createOrder(item, quantity) {
  if (quantity <= 0) {
    throw new Error("Quantity must be positive");
  }
  return {
    orderId: Math.random().toString(36).substr(2, 9),
    item: item,
    quantity: quantity,
    status: "created"
  };
}

console.log(createOrder("shoes", 5));
module.exports = { createOrder };
EOF

# Verify file created
cat app.js