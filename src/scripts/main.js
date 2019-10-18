console.log("good morning! lab time, donuts... what a great day!")


const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    }
}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "medium"
}

const chickenOnlyMeal = {
    sandwichType: "chicken",
    fries: false,
    drinkSize: "small"
}

const burgerOnlyMeal = {
    sandwichType: "burger",
    fries: false,
    drinkSize: "small"
}

// Place an order
restaurant.placeOrder(burgerComboMeal);

restaurant.placeOrder(chickenOnlyMeal);

// Invoke the function to return the list of all orders
console.log(restaurant.orders);

// Output all orders to the console using console.table()
