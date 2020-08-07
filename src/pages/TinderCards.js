import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const StyledTinderCards = styled.div`
  .card {
    position: relative;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    background-position: center;
    background-size: cover;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
  }
  .tinderCards__cardContainer {
    display: flex;
    justify-content: center;
    margin-top: 5vh;
  }
  .swipe {
    position: absolute;
  }
`;

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Luong Quy Tan",
      url: image1,
    },
    {
      name: "Nguyen Ngoc Nhu Quynh",
      url: image2,
    },
  ]);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <StyledTinderCards>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["right", "left"]}
            className="swipe"
            key={person.name}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </StyledTinderCards>
  );
}
export default TinderCards;
