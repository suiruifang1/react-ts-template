// import React, { useContext, useState } from "react";
import React from "react";
import styles from "./Rebot.module.css";
// import { appContext,appSetStateContext } from "../AppState";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  // const value = useContext(appContext);
  // const setState = useContext(appSetStateContext)
  
  // const handleAddToCart = ()=>{
  //   if(setState){
  //     setState(state =>{
  //       return {
  //         ...state,
  //         shoppingCart:{
  //           items:[...state.shoppingCart.items,{id,name}]
  //         }
  //       }
  //     })
  //   }
  // }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      {/* <p>{value.username}</p> */}
      {/* <button onClick={handleAddToCart}>加入购物车</button> */}
    </div>
  );
};

export default Robot;
