import React from "react";

const GlobalContext = React.createContext();// tạo global state
export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;