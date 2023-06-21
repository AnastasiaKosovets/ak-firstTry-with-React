import React, { useEffect } from "react";
import "./ProductCard.css";
import Card from "react-bootstrap/Card";
import ortodonciaImg from "../../img/ortodonciaImg.jpg";

export const ProductCard = ({ firstName, lastName, treatmentName, id }) => {
  useEffect(() => {
    console.log();
  }, []);

  const notFound = `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`;
  return (
    <div className="">
      <Card className="productCardDesign" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text className="cardText">
          
        {firstName}</Card.Text>
          <Card.Text className="cardText">{lastName}</Card.Text>
          <Card.Text className="cardText">
          <Card.Img
          variant="top"
          className="pictureDesign"
          style={{ width: "12rem" }}
          src={ortodonciaImg}
          alt={id}
        />{treatmentName}</Card.Text>
        </Card.Body>
      </Card>
      {/* <div className="imageDesign">
                <img className="pictureDesign" src={image !== "" ? image : notFound} alt={id} />
            </div>
            <div className="cardText">{name}</div>
            <div className="cardText">{species}</div> */}
    </div>
  );
};
