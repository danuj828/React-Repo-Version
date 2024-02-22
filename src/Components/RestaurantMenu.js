import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{resInfo.cards[2].card.card.info.name}</h1>
      <h3>{resInfo.cards[2].card.card.info.cuisines.join(", ")}</h3>
      <h3>{resInfo.cards[2].card.card.info.costForTwoMessage}</h3>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item.card.info.name} -{"Rs - "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
