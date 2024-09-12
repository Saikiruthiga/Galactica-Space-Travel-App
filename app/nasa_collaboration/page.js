"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "@/components/nasa_collaboration/RoverPhoto";

const API_KEY = "1NtihPg8I6peaUr8YXhXepHXa7izYiAHKaEs8zF9";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();

    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchDailyImg();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.nasaPicOfTheDayImg}>
            <img src={dailyImg.url} alt="" />
            <h3>{dailyImg.title}</h3>
            <p>{dailyImg.explanation}</p>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo, index) => (
              <RoverPhoto
                key={`${photo.rover.name} - ${index}`}
                src={photo.img_src}
                date={photo.earth_date}
                roverName={photo.rover.name}
              />
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
