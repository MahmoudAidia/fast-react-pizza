# React Pizza Project
A simple application, where users can order one or more pizzas from a menu.

## Installation
- To view this project, you have to:
    - Clone this repos:
      - $ git clone https://github.com/MahmoudAidia/fast-react-pizza.git
    - Install all the dependencies :
      - $ npm install

## Live Demo
- https://app.netlify.com/sites/warm-ganache-1a5df0/deploys/65be2dc92332c085e304b867


## About the project and its Features
- The app requires no user accounts and no login. Users just input their names before using the app.
- The pizza menu is loaded from an API.
- Users can add multiple pizzas to a cart before ordering.
- Ordering requires just the user’s name, phone number, and address.
- The app can get the address from the user's GPS location.
- User’s can mark their order as “priority” for an additional 20% of the cart price.
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- Payments are made on delivery, so no payment processing is in the app.
- Each order will get a unique ID that is displayed, so the user can later look up their order based on the ID.
- Users cab mark their order as “priority” order even after it has been placed.


## Technology Stack
- Routing --> React Router library.
- Styling --> Tailwind CSS framework.
- Remote State Management --> React Router@6.4 loaders and actions capabilities ( render as you fetch approach ).
- Global UI State Management --> Redux & Redux Toolkit library.


