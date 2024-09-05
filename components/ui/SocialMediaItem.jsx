const SocialMediaItem=({url,title,icon})=>{
  return(
    <li><a href={url} title={title} >
        <img src={icon}/>
        </a>
    </li>  );
}
export default SocialMediaItem;            
        
  

