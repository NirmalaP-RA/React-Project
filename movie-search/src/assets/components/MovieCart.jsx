import React from 'react'
import imageMissing from '../img/image-Missing.png'

export default function MovieCart(movie) {

  if(movie.poster_path!=''){
    var image=`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;
  }else{
    var image=imageMissing;
  }

  return (
    <>
    <div className='box'>
      <img src={image}/>
        {/* <img src="C:\Users\Owner\Desktop\wslc-376\assignments\React js\movie-search\src\assets\img\image-missing.png" alt="" /> */}
        <div className='overlay'>
            <div className='title'>
                <h2>{movie.title}</h2>
                <span>{movie.vote_average}</span>
            </div>
            <h3>Overview:</h3>
            <p>
                {movie.overview}
            </p>
          </div>
    </div> 
    
     {/* <div className='box'>
      <img src={image}/>
        {/* <img src="C:\Users\Owner\Desktop\wslc-376\assignments\React js\movie-search\src\assets\img\image-missing.png" alt="" /> */}
        {/* <div className='overlay'>
            <div className='title'>
                <h2>Balle perdue 3</h2>
                <span>8.1</span>
            </div>
         <h3>Overview:</h3>
         <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia architecto repellat quaerat mollitia. Sint eum sequi ab placeat aspernatur molestias. */}
         {/* </p>
         </div>
         </div> */}
     
    </>
  )
}
