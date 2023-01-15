import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard } from "../components/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers/getHeroesByName";


export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const {searchText, onInputChange} = useForm({searchText: q});

  const onSearchSubmit = (e) => {

    e.preventDefault();
    if(searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);

  };


  return (
    <>

    <h1>Search a Hero</h1>

    <hr />

    <div className="row">
      
      <div className="col-5">
        <h4>Search</h4>
        <hr />
        <form onSubmit={onSearchSubmit}>
          <input 
          type="text" 
          placeholder="Search a hero:" 
          className="form-control" 
          name="searchText" 
          autoComplete="off" 
          value={searchText}
          onChange={onInputChange}
          />
          <button className="mt-2 btn btn-outline-secondary">Search</button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        {
          (q === '') 
          ? <div className="alert alert-primary"> Search a Hero </div> 
          : (heroes.length === 0) && <div className="alert alert-danger">
          That hero doesn't exist! You looked for {q}. Is this correct?
          </div>
        }

        {
          heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))
        }

      </div>

    </div>

    </>
  )
}
