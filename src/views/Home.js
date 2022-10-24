import Galeria from "../components/Galeria";
import { useContext } from 'react';
import context from '../My_Context';

export default function Home() {
  const  { photos } = useContext(context);
  return (
    <div id="Home">
      <h1>Natural Pic</h1>

      <Galeria />
    </div>
  );
}
