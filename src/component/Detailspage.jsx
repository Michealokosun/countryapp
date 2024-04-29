import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbarmenu } from "./Navbar";
import { Globalcontext } from "../gobalcontex";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export default function Detailspage() {
  const { countryname } = useParams();
  const { CountryData, theme } = useContext(Globalcontext);
  const singlecountry = CountryData.filter((item) => {
    return item.name === countryname;
  });

  return (
    <div className={theme ? "App-dark-mode" : "App-light-mode"}>
      <Navbarmenu />
      <Link className={theme ? "dark-btn" : "light-btn"} to="/">
        <span>
          <i class="bi bi-arrow-left"></i>
        </span>{" "}
        Back
      </Link>
      <Container>
        <div
          className={
            theme
              ? " detaildark-container   d-flex align-items-center"
              : " detaillight-container   d-flex align-items-center"
          }
        >
          <div className="col-md-6 img-container">
            <img
              className="img-fluid"
              src={singlecountry[0].flags.svg}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h2>{singlecountry[0].name}</h2>
            <div className="d-flex det my-5">
              <div className="det1">
                <p>
                  native name: <span>{singlecountry[0].nativeName}</span>
                </p>
                <p>
                  population: <span>{singlecountry[0].population}</span>
                </p>
                <p>
                  region: <span>{singlecountry[0].region}</span>
                </p>
                <p>
                  sub region: <span>{singlecountry[0].subregion}</span>
                </p>
                <p>
                  capital: <span>{singlecountry[0].capital}</span>
                </p>
              </div>
              <div className="det1">
                <p>
                  topLevel Domain: <span>{singlecountry[0].nativeName}</span>
                </p>
                <p>
                  Currencies: <span>{singlecountry[0].nativeName}</span>
                </p>
                <p>
                  languages:{" "}
                  <span>
                    {singlecountry[0].languages.map((item) => (
                      <span>{item.name}, </span>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center buttons gap-5">
              <div>
                <p>border countries:</p>
              </div>
              <div
                className={theme ? "dark-buttons-tages" : "light-buttons-tages"}
              >
                {singlecountry[0].borders
                  ? singlecountry[0].borders.map((item) => (
                      <Button>{item}</Button>
                    ))
                  : "Has No Borders"}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
