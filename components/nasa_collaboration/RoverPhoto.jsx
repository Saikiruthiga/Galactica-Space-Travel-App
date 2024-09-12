import styles from "../../app/nasa_collaboration/page.module.css"
const RoverPhoto =({src,date,roverName})=>{
    return(
        <div className={styles.roverPhoto}>
            <img src={src} alt=""/>
            <p>{roverName}-{date}</p>
        </div>
    );
}

export default RoverPhoto;