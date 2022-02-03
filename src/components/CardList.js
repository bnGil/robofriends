import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArray = robots.map((user) => {
    return (
      <Card key={user.id} id={user.id} name={user.name} email={user.email} />
    );
    // when looping in react we need to give a unique "key" prop.
  });
  return (
    <div>{cardsArray}</div>
    // I think the cardsArray's curly braces are because JSX. it's used to evaluate javascript expression.
  );
};

export default CardList;
