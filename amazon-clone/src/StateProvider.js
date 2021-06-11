// set up data layer
// we use this to track the basket

import React, { createContext, useContext, userReducer } from "react";

// THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={userReducer(reducer, initialState)}>
        {children};
    </StateContext.Provider>
)
