import { Button } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import s from "./Get_Popular.module.css"
export default function Get_Popular(){

const [popular,setPopular] = useState([]); 

 useEffect(() => {
       fetch("https://api.themoviedb.org/3/movie/popular?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US&page=1")
        .then((res) => res.json())
        .then((data) =>{
            
             setPopular(data)
             console.log(data);
        })
       },[]);
    
       const shortText = function (text) {
        var newText = text.substring(0, 30);
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);
      
        if (text.length > 30) {
          return newText + "...";
        }
        return newText;
      };

return(
    <div  className = {s.contenedor}>
       {popular.results ? (
       popular.results && popular.results.map((item) => (
           <div key={item.id} className={s.card}>
               <div className={s.image}>
                 <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                </div>
                <div className={s.content}>
                    {shortText(item.original_title)}
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