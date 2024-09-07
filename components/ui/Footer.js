"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";
import SocialMediaItem from "./SocialMediaItem";

export const Footer = () => {
  const path = usePathname().split("?")[0];
  const socialMediaLinks = [
    {
      url: "https://linkedin.com/galactica.in",
      title: "Linkedin",
      icon: "https://img.icons8.com/fluency/48/linkedin.png",
    },
    {
      url: "https://facebook.com",
      title: "Facebook",
      icon: "https://img.icons8.com/fluency/48/facebook-new.png",
    },
    {
      url: "https://instagram.com",
      title: "Instagram",
      icon: "https://img.icons8.com/fluency/48/instagram-new.png",
    },
    {
      url: "https://tiktok.com",
      title: "Tiktok",
      icon: "https://img.icons8.com/stickers/50/tiktok.png",
    },
    {
      url: "https://google.com",
      title: "Google",
      icon: "https://img.icons8.com/color/48/google-logo.png",
    },
  ];
  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>
          Explore the universe and beyond. Your journey to the stars starts
          here.
        </p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>
      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/about_us">About us</Link>
          </li>
          <li>
            <Link href="/destination">Destination</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">Nasa Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          {socialMediaLinks.map((link, index) => (
            <SocialMediaItem
              key={index}
              url={link.url}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </ul>
      </div>
    </footer>
  );
};
