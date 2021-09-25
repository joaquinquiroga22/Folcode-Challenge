import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

export default function Get_Details(){

const [details,setDetails] = useState([]); 
const {id} = useParams();
 useEffect(() => {
       fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US`)
        .then((res) => res.json())
        .then((da) =>{
            setDetails(da)
            console.log(da);
        })
       },[]);
    
return(
    <div>
        <h1>
        <img src={`http://image.tmdb.org/t/p/w500/${details.backdrop_path}`}/>
        {details.original_title}
        </h1>
    </div>
)
};