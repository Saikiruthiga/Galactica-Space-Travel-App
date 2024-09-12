"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";
import PlanetCard from "@/components/destination/PlanetCard";

export const Destinations = () => {
  const planets = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },

    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];
  const [wishlist, setWishist] = useState([]);

  const handleAddWishlistItem = (item) => {
    const isPlanetWishlist = wishlist.some(
      (planet) => planet.name.toLowerCase() === item.name.toLowerCase()
    );
    if (isPlanetWishlist) {
      setWishist(wishlist.filter((planet) => planet.name !== item.name));
    } else {
      setWishist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (name) => {
    setWishist(
      wishlist.filter(
        (planet) => planet.name.toLowerCase() !== name.toLowerCase()
      )
    );
  };
  const numberOfPlanets = wishlist.length;

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {numberOfPlanets > 0 ? (
            <p>You have {numberOfPlanets} in your wishlist</p>
          ) : (
            <p className={styles.iconText}>
              <img
                src="https://img.icons8.com/color-pixels/32/shopping-cart.png"
                alt=""
              />
              No planets in wishlist :(
            </p>
          )}
          <AddWishlistItem
            onAddWishlistItem={handleAddWishlistItem}
            planets={planets}
          />
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            {wishlist.map((planet) => (
              <PlanetWishlistItem
                key={planet.name}
                name={planet.name}
                onRemove={() => removeFromWishlist(planet.name)}
                thumbnail={planet.thumbnail}
              />
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {planets.map((planet) => {
            const isSelected = wishlist.some(
              (wish) => wish.name.toLowerCase() === planet.name.toLowerCase()
            );
            return (
              <PlanetCard
                key={planet.name}
                name={planet.name}
                description={planet.description}
                thumbnail={planet.thumbnail}
                isSelected={isSelected}
                onAddOrRemovePlanet={() => handleAddWishlistItem(planet)}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
