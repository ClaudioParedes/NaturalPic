import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import {useState, useEffect} from 'react';
import MyContext from "./My_Context";

export default function App() {

  const [photos, setPhotos] = useState([])

  const endpoint = "/fotos.json";

const getJsonData = async () => {
  const response = await fetch(endpoint);
  let {photos} = await response.json();

 photos =  photos.map(item =>{
    return{
    id : item.id,
    src : item.src,
    alt: item.alt,
    liked: item.liked
  }

  })
  setPhotos(photos)
}

  useEffect(() =>{
    getJsonData();
  }, [])


  return (
    <div className="App">

      <MyContext.Provider value = {{photos, setPhotos}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider> 
    </div>
  );
}
