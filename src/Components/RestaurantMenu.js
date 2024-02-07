import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.64602511634124&lng=77.16412849724293&restaurantId=24194&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resInfo.cards[0].card.card.info.name}</h1>
      <h3>{resInfo.cards[0].card.card.info.cuisines.join(", ")}</h3>
      <h3>{resInfo.cards[0].card.card.info.costForTwoMessage}</h3>
      <ul>
        {/* {itemCards.map((item) => {
          <li>{item.card.info.name}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
