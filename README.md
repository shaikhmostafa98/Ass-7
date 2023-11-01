# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

My Project features:

    . This project devided into two parts. One are cart and another is course details/course registration section.
    . Click on course registration card selected button, then it add to cart.
    . In this card, display course name, price, credit & remaining hour.
    . You get only 20 credit point to add course in this cart section.

How did I manage the state in my assignment project:

    1. By using fetch & useEffect load data from JSON file.
    2. Then set data by using react useState hooks, in setCourse function.
    3. Use map for display data from setCourse function.
    4. I have added a button to each card and add a function in this button to add card data to the cart option.
    5. Created a separate state to show each piece of component from the card.
