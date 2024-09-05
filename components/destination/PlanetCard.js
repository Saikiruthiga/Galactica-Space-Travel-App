import styles from "@/components/destination/destination.module.css";
const PlanerCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
}) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} />
      <div className="planetDescription">
        <h2>
          {name} {isSelected ? "- Selected" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button className="roundButton" onClick={onAddOrRemovePlanet}>
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};
export default PlanerCard;
