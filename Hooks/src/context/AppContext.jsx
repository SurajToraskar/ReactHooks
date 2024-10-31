import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "1234567899";
  const name = "SurajToraskar";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
