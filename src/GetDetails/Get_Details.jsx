import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import style from "./Get_Details.module.css"
export default function Get_Details() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US`)
            .then((res) => res.json())
            .then((da) => {
                setDetails(da)
                console.log(da);
            })
    }, []);
    // function generos() {
    //     var array = [];
    //      console.log(details.genres)
    //      var length = details.genres.length;
    //       for (let i = 0; i < length; i++) {
    //           array.push(details.genres[i].name);
             
    //       }  
    //       return array
    // }

    return (
        <div className={style.caja}>

            <div className={style.img}>
                <img src={`http://image.tmdb.org/t/p/w500/${details.backdrop_path}`} />
            </div>
            <div className={style.txt}>
                <h1>{details.title}</h1>
                <p>{details.overview}</p>
                <h1>Popularidad:{details.popularity}</h1>
                <h2>{details.original_title}</h2>
                <h3>Presupuesto:{details.budget}</h3>
                 {/* <h4>{generos()}</h4>  */}
                {/* <h4>{details.genres[0].name}</h4> */}
                {/* <h4>{details.genres[1].id}</h4>
            <h4>{details.genres[2].id}</h4>
            <h4>{details.genres[3].id}</h4>  */}


            </div>
        </div>

    )
};