import React, {useEffect,useState} from "react";




export default function Get_Top_Rated(){
  
    const [toprated,setTopRated] = useState([]); 

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US&page=1")
         .then((res) => res.json())
         .then((data) =>{
             const Data = {
                 original_title: data.results.original_title,
                 poster_path: data.results.poster_path
              }
              setTopRated(data)
              console.log(data);
         })
        },[]);
  

        return(
            <div>
            {toprated.results ? (
            toprated.results && toprated.results.map((item) => (
                <div key={item.id}>
                    <div>
                    <img src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                     </div>
                     <div>{item.original_title} - {item.overview}</div>
                </div>
            )) 
            ):( 
                 <p>No hay nada</p>
            )}
         </div>

        )

}