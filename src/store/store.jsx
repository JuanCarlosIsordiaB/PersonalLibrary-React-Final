import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext({
    //Estrucutra del estado
    items:[],
    createItem: (item) => {},
    getItem: (id) => {}
})

export const Store = ({children}) => {

    const [items, setItems] = useState([]);
    
    const createItem = (item) => {
        setItems([item, ...items]);
    }

    const getItem = (id) => {
        const item = items.find(item => item.id === id);
        return item;
    }


  return (
    <AppContext.Provider value={{items, createItem,getItem}}>
        {children}
    </AppContext.Provider>
  )
}

export default function useAppContext() {
    return useContext(AppContext);
}
