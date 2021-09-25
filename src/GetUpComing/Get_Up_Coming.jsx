import React, {useEffect, useState} from "react";
import s from "../GetPopular/Get_Popular.module.css";
import { Button } from "@material-ui/core";

export default function Get_Up_Coming(){
    const shortText = function (text) {
        var newText = text.substring(0, 30);
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
      
        if (text.length > 30) {
          return newText + "...";
        }
        return newText;
      };
const [coming,setUpComing] = useState([]); 

useEffect(() => {
      fetch(" https://api.themoviedb.org/3/movie/upcoming?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US&page=1")
       .then((res) => res.json())
       .then((data) =>{
           const Data = {
               original_title: data.results.original_title,
               poster_path: data.results.poster_path
            }
            setUpComing(data)
            console.log(data);
       })
      },[]);
    
  

return(
    <div className = {s.contenedor}>
       {coming.results ? (
       coming.results && coming.results.map((item) => (
           <div key={item.id} className={s.card}>
               <div className={s.image}>
               <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                </div>
                <div className={s.content}>
                    {shortText(item.title)}
                    <br/>
                         <Button  size="medium" style= {{marginTop: "10px"}} href= {`/getDetails/${item.id}`}>
                        Ver
                         </Button>
                </div>
           </div>
       )) 
       ):( 
            <p>No hay nada</p>
       )}
    </div>
)
};