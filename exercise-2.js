//In this example we are trying to check if a value for the `city` property is defined. However, the code can be simplified. How can we do that?

const order = {
  customer:{
    address: {
      city: "New York"
    }
  }
};

if (
  order &&
  "customer" in order &&
  "address" in order.customer &&
  "city" in order.customer.address
) {
  console.log("City is required");
}