import { createContext, useEffect, useState } from "react";
import { CountryData } from "./data";
export const Globalcontext = createContext(null);

export function Globalstate({ children }) {
  const [theme, settheme] = useState(false);
  const [searchinput, setsearchinput] = useState("");

  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", Boolean(theme));
    } else {
      const mode = localStorage.getItem("mode");
      console.log(theme, mode);

      settheme(Boolean(mode));
    }
  }, []);

  const handlefilter = (value) => {
    const filter = CountryData.filter((item) => {
      if (value === "") {
        return item;
      } else {
        return (
          item.region.toLowerCase().includes(value.toLowerCase()) ||
          item.name.toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    return filter;
  };

  const handlesearch = (e) => {
    setsearchinput(e.target.value);
  };

  const filteredData = handlefilter(searchinput);
  return (
    <Globalcontext.Provider
      value={{
        theme,
        settheme,
        CountryData,
        filteredData,
        searchinput,
        handlesearch,
      }}
    >
      {children}
    </Globalcontext.Provider>
  );
}
