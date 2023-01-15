import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { Navigate } from "react-router-dom";

export const Hero = () => {

  const params =  useParams();

  const {id} = params;

  const hero = getHeroById(id);

  const navigate = useNavigate();

  const onNavigateBack = () => {
    hero.publisher == 'DC Comics' ? navigate('/dc') : navigate('/marvel');
  };

  if (!hero) {
    return <Navigate to='/marvel' />
  }

  return (
  <div className="row mt-5">

    <div className="col-4 animate__animated animate__fadeIn"> 
      <img src={`/Assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail"/>
    </div>

    <div className="col-8">
      <h3>{hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Alter ego: {hero.alter_ego}</b></li>
        <li className="list-group-item"><b>Publisher: {hero.publisher}</b></li>
        <li className="list-group-item"><b>First Appearance: {hero.first_appearance}</b></li>
      </ul>

      <h5 className="mt-3"> Characters</h5>
      <p>{hero.characters}</p>

      <button className="btn btn-outline-secondary" onClick={onNavigateBack}>
        Previous page
      </button>
    </div>
  </div>
  )
}
