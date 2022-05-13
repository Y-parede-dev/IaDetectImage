import { IsHuman } from './component/IsHuman';
import VADER from './A/vader.jpg'
import * as faceapi from 'face-api.js'
import { LoadModels } from './component/LoadModels';

/* OBJET DE TEST */
const ud = {
  username :"Yoan",
	firstname:"Parede",
	lastname:"Test",
	mainSkill:["1",2],
	linkedinID:"Test",
	profilPictureUrl:"Test",
	human : false // Valeur a ajouter a ton objet qui est stocker sur firebase
}
function App() {
  
  LoadModels() //chargement des models de tests pour savoir si il y a une personne sur la photo 

  return (
    <div className="App">
      {/* ajout de IsHuman dans l'event onChange */}
        <input id="fileUpload" type="file" onChange={(e)=>{IsHuman(e,ud, faceapi)}}/>
    </div>
  );
}


export default App;
