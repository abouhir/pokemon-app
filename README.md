# README
This is a React application that displays a list of pokemons from the PokeAPI. The application allows the user to navigate through pages of pokemons, view a specific pokemon's details, and filter pokemons by type.

The application uses the `react-query` library to handle data fetching and caching, and `react-router-dom` to handle client-side routing.

## Components


The application has three main components:

* `Home`: This component displays a list of pokemons and allows the user to navigate through pages using the < and > buttons.
* `View`: This component displays the details of a specific pokemon when the user clicks on a pokemon's name in the Home component.
* `Type`: This component allows the user to filter pokemons by type.
## Services
The application has two services:

* `getPokemons`: This service fetches a list of pokemons from the PokeAPI.
* `getPokemon`: This service fetches the details of a specific pokemon from the PokeAPI.
## Styles
The application uses CSS for styling. There are three main CSS files:

- `home.css`: Styles for the Home component.
- `view.css`: Styles for the View component.
- `App.css`: Styles for the overall layout of the application.
## Assets
The application has two assets:
- `Pokemon_logo.png`: The logo of Pokemon.
- `hand-ball-poke.jpg`: An image of a pokeball in a hand.
## Additional

The application also has a small state management using `useState hook` and `react-router-dom` to navigate between pages.

The application is designed to be responsive, but it is only tested on desktop.

## Usage
To run the application, you need to have Node.js and Yarn installed on your system. Then, follow these steps:

Clone the repository.
1. Run yarn install to install the dependencies.
2. Run yarn start to start the development server.
3. Open http://localhost:3000 in your browser to see the application.
