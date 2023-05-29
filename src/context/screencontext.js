import { useEffect, useState, createContext } from "react";

const ScreenContext = createContext();

export const ScreenContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  //taken from earlier priject i did (js framework assignment)
  useEffect(() => {
    const onWidthChange = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onWidthChange);
    return () => {
      window.removeEventListener("resize", onWidthChange);
    };
  }, []);
  return (
    <ScreenContext.Provider
      value={{
        width,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export default ScreenContext;
