import Galery from '../components/Galeria';
import context from '../My_Context';
import { useContext } from 'react';

export default function Favoritos() {
  
  const {photos, setPhotos}= useContext(context);
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
       {photos.filter(item =>(item.liked)).map(photo => (<div className='foto' key={photos.id}
         style={{backgroundImage: `url(${photo.src.small})`}}></div>
       ))}
      </div>
    </div>
  );
}
