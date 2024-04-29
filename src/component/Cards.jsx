import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Globalcontext } from "../gobalcontex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Cards() {
  const { filteredData, theme } = useContext(Globalcontext);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <div
          className={theme ? " dark-card cards mt-5" : " light-card cards mt-5"}
        >
          {filteredData.map((item) => (
            <Card
              onClick={() => navigate(`/${item.name}`)}
              style={{ width: "18rem", paddingBottom: 30 }}
            >
              <Card.Img variant="top" src={item.flag} />
              <Card.Body style={{ marginLeft: 20, marginTop: 10 }}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {" "}
                  <span>Population</span> : {item.population}
                </Card.Text>
                <Card.Text>
                  <span>Region</span> : {item.region}
                </Card.Text>
                <Card.Text>
                  {" "}
                  <span>Capital</span> : {item.capital}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Cards;
