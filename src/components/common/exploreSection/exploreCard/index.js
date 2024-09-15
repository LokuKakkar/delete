import React from "react";
import "./exploreCard.css";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant["Restaurant Name"] ;
  const coverImg = restaurant["featured_image"];
  // const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant["Aggregate rating"];
  const approxPrice = restaurant["Average Cost for two"];
  // const offers = restaurant?.bulkOffers ?? [];
  // const cuisines = restaurant?.Cuisines
  //   ?.map((item) => item.name)
  //   .slice(0, 3);
  // const bottomContainers = restaurant?.bottomContainers;
  // const goldOff = restaurant?.gold?.text;
  // const proOff = offers.length > 1 ? offers[0].text : null;
  // const discount =
  //   offers.length > 1
  //     ? offers[1].text
  //     : offers.length === 1
  //     ? offers[0].text
  //     : null;

  return (
    <div className="explore-card cur-po">
    {/* <p>{restaurant["Restaurant ID"]} id </p> */}
      <div className="explore-card-cover">
        <img src={coverImg} alt={name} className="explore-card-image" />
        {/* <div className="delivery-time">{deliveryTime}</div> */}
        {/* {proOff && <div className="pro-off">{proOff}</div>} */}
        {/* {goldOff && <div className="gold-off absolute-center">{goldOff}</div>} */}
        {/* {discount && <div className="discount absolute-center">{discount}</div>} */}
      </div>
      <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && (
          <div className="res-rating absolute-center">
            {rating} <i className="fi fi-rr-star absolute-center"></i>
          </div>
        )}
      </div>
      <div className="res-row">
        {/* {cuisines.length && (
          <div className="res-cuisine">
            {cuisines.map((item, indx) => {
              return (
                <span className="res-cuisine-tag">
                  {item}
                  {indx !== cuisines.length - 1 && ","}
                </span>
              );
            })}
          </div>
        )} */}
        {approxPrice && <div className="res-price"> ₹{approxPrice} for two</div>}
      </div>
      {/* {bottomContainers.length > 0 && (
        <div>
          <div className="card-separator">
            <div className="explore-bottom">
              <img
                src={bottomContainers[0]?.image?.url}
                style={{ height: "18px" }}
                alt={bottomContainers[0]?.text}
              />
              <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ExploreCard;
