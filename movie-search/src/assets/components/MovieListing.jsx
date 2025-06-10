import React, { useEffect, useRef, useState } from 'react'
import MovieCart from './MovieCart'
import axios from 'axios';
import { toast } from 'react-toastify';

export default function MovieListing() {

  const searchName=useRef();
  // useRef is also called hook

let [searchValue,setSearchValue]=useState('');
let[movieData,setMovieData]=useState([]);
let [currentPage,setCurrentPage]=useState(1);

var APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
// by default call first api url to get data
// const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// // to get img from img base api to get api response
var SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// search api url


useEffect(()=>{
     if(searchValue==''){
      var url=APIURL+currentPage;
     }
     else
     {
      var url=SEARCHAPI+searchValue;
     }
    //  again install two usuall package axios,react-toastify
    axios.get(url)
    .then((response)=>{
       if(response.data.results){
         setSearchValue(response.data.results)
       }
       else
       {
        toast.error('something went wrong!! please try again');
       }
    })
    .catch((error)=>{
       toast.error('something went wrong!! please try again');
    })

},[searchValue,currentPage]);


const searchMovie=(event)=>{
//  setSearchValue(event.target.value)
setSearchValue(searchName.current.value)
}


const previous=()=>{
    if(currentPage>1){
      currentPage--;
      setCurrentPage(currentPage);
    }
}


const next=()=>{
  currentPage++;
  setCurrentPage(currentPage);
} 


  return (
    <>
      <div class="main">
            <div class="row" style={{'justifyContent': 'center'}}>
                <input type="search" id="search" autoFocus autoComplete="off" placeholder="Search Here..." onKeyUp={searchMovie} ref={searchName}/>
            </div>
            <div class="row" id="movie-box">
              {
                movieData.map((value,index)=>{
                  return(
                        <MovieCart key={index} movie={value}/>
                  )
                })
              }
              
            </div>
            <div className='buttons'>
              <button onClick={previous}>Previous</button>
              <button onClick={next}>Next</button>
            </div>
      </div>
    </>
  )
}
