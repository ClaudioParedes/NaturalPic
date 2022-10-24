import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext } from 'react';
import context from '../My_Context';

export default function Home() {
  const  { photos, setPhotos } = useContext(context);

  const setFavorito = (id) => {
    const fotoIndex = photos.findIndex((f)=>f.id===id);
    photos[fotoIndex].liked = !photos[fotoIndex].liked;
    setPhotos([...photos]);
    
  }

  return (
    <div className="galeria grid-columns-5 p-3">
{
  photos.map((photo, index) => (
    <div className="foto" key={photo.id}
    style={{ backgroundImage: `url(${photo.src.tiny})`}}
    onClick= {() => {  
      setFavorito(photo.id)
    }}>

      <Heart filled = {photo.liked}/>
      <p>{photo.alt}</p>

    </div>
  ))
}
    </div>
  );
}
