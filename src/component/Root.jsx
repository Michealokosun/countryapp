import React from "react";
import { Navbarmenu } from "./Navbar";
import Search from "./Search";
import Cards from "./Cards";

export default function Root() {
  return (
    <div>
      <Navbarmenu />
      <Search />
      <Cards />
    </div>
  );
}
