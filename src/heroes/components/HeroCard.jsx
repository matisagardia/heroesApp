import {Link} from 'react-router-dom';

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters,}) => {

  const heroImageUrl = `/Assets/heroes/${id}.jpg`;

  return (

    <div className="col">
        <div className="card">
            <div className="row no-gutters">

                <div className="col-4 animate__animated animate__fadeIn"> 
                <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>

                <div className="col-8">

                  <div className="card-body">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego !== characters ? alter_ego : ''}</p>
                    <p className="card-text">{characters}</p>
                    <p className="card-text"><small className="text-muted">{first_appearance}</small></p>
                  </div>

                  <Link to={`/hero/${id}`}>
                    More info...
                  </Link>

                </div>
            </div>
        </div>
    </div>

  )
}
