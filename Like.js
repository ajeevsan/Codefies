import React, {useState} from "react";


function Like(){
  const [likes,setLikes] = useState(0);
  // const [color, setColor] = useState([])

function getLike(){
  setLikes(likes+1);
}

  return <>
  <img id= "like-btn-img" src="./src/like.svg" onClick={getLike} alt="" style={{background: "rgba (255, 0, 0, 0)"}}></img>
  <span id="like-counter">Likes:{likes}</span>
  </>
}

export default Like;

