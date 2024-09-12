"use client";

import { useState } from "react";
import styles from "./destination.module.css";

export const AddWishlistItem = ({ onAddWishlistItem, planets }) => {
  const [thumbnail, setThumbnail] = useState("/destination/image-europa.png");
  const [wishListItem, setWishLishItem] = useState("");
  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.value);
  };
  const handleInputChange = (e) => {
    setWishLishItem(e.target.value);
  };
  const onAddItemPressed = () => {
    const validPlanet = planets.find(
      (p) =>
        p.name.toLowerCase() === wishListItem.toLowerCase() &&
        p.thumbnail === thumbnail
    );
    if (validPlanet) {
      onAddWishlistItem({ name: wishListItem, thumbnail });
      setWishLishItem("");
    } else {
      alert("Name and thumbnail should match");
    }
  };

  return (
    <div className={styles.addWishlistItem}>
      <p>Add custom planet to wishlist</p>
      <label htmlFor="customWishlist">Wishlist item name</label>
      <input
        id="customWishlist"
        type="text"
        value={wishListItem}
        onChange={handleInputChange}
      />
      <label htmlFor="customWishlistThumbnail">Wishlist item thumbnail</label>
      <select
        id="customWishlistThumbnail"
        onChange={handleThumbnailChange}
        value={thumbnail}
      >
        <option value="/destination/image-europa.png">EUROPA</option>
        <option value="/destination/image-mars.png">MARS</option>
        <option value="/destination/image-moon.png">MOON</option>
        <option value="/destination/image-titan.png">TITAN</option>
      </select>
      <button onClick={onAddItemPressed}>ADD CUSTOM</button>
    </div>
  );
};
