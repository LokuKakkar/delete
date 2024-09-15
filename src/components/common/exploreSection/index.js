// import React from "react";
import "./exploreSection.css";
import ExploreCard from "./exploreCard";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../../redux/slices/restaurantSlice';

const ExploreSection = ({ list, collectionName }) => {
  // return (
  //   <div className="max-width explore-section">
  //     <div className="collection-title">{collectionName}</div>
  //     <div className="explore-grid">
  //       {list.map((restaurant) => {
  //         return <ExploreCard restaurant={restaurant} />;
  //       })}
  //     </div>
  //   </div>
  // );
  const dispatch = useDispatch();
  const { restaurants, status, error } = useSelector((state) => state.restaurants);

  useEffect(() => {
    // ----------------- Here fetchRestaurants should have the filters from the form 
      dispatch(fetchRestaurants({ page: 1, limit: 10, countryCode: 1 }));
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
      // <div>
      //     <h1>Restaurant List</h1>
      //     {console.log(restaurants)}
      //     <ul>
      //         {restaurants.map((restaurant) => (
      //             <li key={restaurant['Restaurant ID']}>
      //                 {restaurant['Restaurant Name']}
      //             </li>
      //         ))}
      //     </ul>
      // </div>

    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant) => {
          
          return <ExploreCard restaurant={restaurant} />

        })}
      </div>
    </div>

  );



};

export default ExploreSection;
