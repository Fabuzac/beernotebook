import { createContext } from "react";
import {useState} from 'react';

export const FavoritesContext = createContext({
  //id object
  ids: [],
  // context make reference to the function and pass the parameter
  addFavorite: (id) => {},
  // context make reference to the function and pass the parameter
  removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {
  // Create state
  const [favoriteMealIds, setFavoriteMealIds] = useState({});

  // Link the function to the context
  function addFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  // Link the function to the context
  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => 
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    // key: value
    // name: function
    // addFavorite: addFavorite()
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;