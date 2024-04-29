import React, { useContext } from "react";
import Container from "react-bootstrap/esm/Container";
import { Globalcontext } from "../gobalcontex";

import Form from "react-bootstrap/Form";

export default function Search() {
  const { theme, handlesearch, filteredData } = useContext(Globalcontext);
  return (
    <Container>
      <div className="search mt-5">
        <div
          className={
            theme
              ? "dark-searchinput searchinput d-flex align-items-center"
              : "searchinput d-flex align-items-center"
          }
        >
          <span>
            <i class="bi bi-search-heart fs-4"></i>
          </span>
          <Form.Control
            onChange={handlesearch}
            size="lg"
            type="text"
            placeholder="Search for a country..."
          />
        </div>
        <div
          className={
            theme ? "dark-selectcountry selectcountry" : "selectcountry"
          }
        >
          <Form.Select
            onChange={handlesearch}
            aria-label="Default select example"
          >
            <option className="rr" value="">
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </Form.Select>
        </div>
      </div>
      <span
        className={
          theme
            ? "text-light  fs-5 text-capitalize "
            : "text-secondary fs-5 text-capitalize "
        }
      >
        " found over {filteredData.length} countries "
      </span>
    </Container>
  );
}
