import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Globalcontext } from "../gobalcontex";

export const Navbarmenu = () => {
  const { theme, settheme } = useContext(Globalcontext);
  console.log(theme);

  const handletheme = () => {
    settheme(!theme);
    localStorage.setItem("mode", theme);
  };
  return (
    <Navbar
      expand="lg"
      className={theme ? "bg-body-dark py-4" : "bg-body-tertiary py-4"}
    >
      <Container>
        <Navbar.Brand
          className="navLink"
          style={{ fontWeight: 300 }}
          href="#home"
        >
          Where In The World?
        </Navbar.Brand>
        <Nav className="">
          {theme ? (
            <Navbar.Brand onClick={handletheme} href="#home">
              <span>
                <i class="bi bi-cloud-moon-fill fs-2"></i>
              </span>
              LightMode
            </Navbar.Brand>
          ) : (
            <Navbar.Brand onClick={handletheme} href="#home">
              <span>
                <i class="bi fs-2 bi-cloud-sun"></i>
              </span>
              Darkmode
            </Navbar.Brand>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
