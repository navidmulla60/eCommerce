import React, { createContext, useContext, useState, useEffect } from "react";

import { Toast } from "react-hot-toast";

const Context = createContext();
export const StateContext = ({ children }) => {
    const [showCart, setshowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, settotalPrice] = useState();
    const [totalQuantity, settotalQuantity] = useState();
    const [qty, setqty] = useState(1);

    const incQty = () => {
        setqty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setqty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantity,
                qty,
                incQty,
                decQty,
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);