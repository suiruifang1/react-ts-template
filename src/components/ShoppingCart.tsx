import React from "react";
import styles from "./ShoppingCart.module.css";
import { Bs0Circle } from "react-icons/bs";
import { appContext } from "../AppState";

interface Props {}

interface State {
  isOpen: boolean;
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleClick = (e) => {
    // e.target 点击的元素
    // e.currentTarget 事件绑定的元素
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <appContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cartContainer}>
              <button className={styles.button} onClick={this.handleClick}>
                <Bs0Circle />
                <span>{value.shoppingCart.items.length}</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {value.shoppingCart.items.map((item) => (
                    <li>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </appContext.Consumer>
    );
  }
}

export default ShoppingCart;
