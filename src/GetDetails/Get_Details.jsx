import React, { useEffect, useState, Component } from "react";
import { useParams } from 'react-router-dom';
import style from "./Get_Details.module.css"
import { makeStyles } from "@material-ui/core";

import { FaMoneyBillWave, FaPodcast, FaUserCircle, FaStamp } from "react-icons/fa";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})



export default function Get_Details() {
  
  const classes = useStyles();
  

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const [details, setDetails] = useState([]);
  // const [credits, setCredits] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US`)
      .then((res) => res.json())
      .then((da) => {
        setDetails(da)
        console.log(da);
      })
  }, []);

  // API QUE TRAE LOS CREDITOS ANDA.
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US`)
  //     .then((res) => res.json())
  //     .then((dataa) => {
  //       setCredits(dataa)
  //       console.log(dataa);
  //     })
  // }, []);

  ////

  //No pude HACER QUE NO ROMPA, por eso esta comentado.ROMPE
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
    <div className={style.content}>


      <div className={style.caja}>
        <div className={style.image}>
          <img src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} />
        </div>
        <div className={style.txt}>
          <h1>{details.title}</h1>
          <p>{details.overview}</p>
          <div className={style.details}>
            <p> <FaMoneyBillWave color="black" /> Presupesto: {details.budget}</p>
            <p> <FaPodcast /> Popularidad: {details.popularity}</p>
            <p> <FaUserCircle /> Titulo Original: {details.original_title}</p>
            {/* <div className={style.box}>
              <div className={style.percent}>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <div className={style.number}>
                  <p> {details.vote_average * 10}<span>%</span></p>
                </div>
              </div>
              <h2 className={style.text}>Valoración de los usuarios</h2>
            </div> */}
          </div>
        </div>
      </div>





      {/* ROMPE TODO */}
      {/* <div className={style.generos}>
          <TextField
            id="filled-multiline-flexible"
            k


            fullWidth
            required
            // value={details.genres[0].name}
            onChange={handleChange}
            InputProps={{
              readOnly: true
            }}
            variant="filled"
          />
        </div> */}

      {/* <h4>{generos()}</h4>  */}
      {/* <h4>{details.genres[0].name}</h4> */}
      {/* <h4>{details.genres[1].id}</h4>
            <h4>{details.genres[2].id}</h4>
            <h4>{details.genres[3].id}</h4>  */}


    </div>
      /* CREDITOS, NO LLEGUE A REALIZAR EL SLIDER, MIL DISCULPAS */ 
  /* <div>
        <div className={style.contenedor}>
          {credits.cast ? (
            credits.cast && credits.cast.map((item) => (
              <div key={item.id} className={style.card}>
                <div className={style.images}>
                  <img src={`http://image.tmdb.org/t/p/w500/${item.profile_path}`} />
                </div>
                <div className={style.contento}>
                  {item.name}

                </div>
              </div>
            ))
          ) : (
            <p>No hay nada</p>
          )}
        </div>
       </div> */
    
  );
};