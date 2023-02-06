import PokemonCard from "@/Components/pokemonCard";
import { useEffect, useState } from "react";
const PokemanHeader = () => {
    const [pokemon, setPokemon] = useState([]);

    const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    nextOffset
    prevOffset
    status
    message
    results {
      url
      name
      image
    }
  }
}`;
    
    const gqlVariables = {
      limit: 10,
    };
    

  useEffect(() => {
      fetch('https://graphql-pokeapi.graphcdn.app/', {
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
      }),
      method: 'POST',
      })
      .then((res) => res.json())
      .then((res) => setPokemon(res.data.pokemons.results));
    }, [])

   console.log(pokemon);
    return ( <div style={{
        backgroundImage: " url('../images/Texture.png'),url('../images/Background.png')"
      }} >
     
      <div className="container">
         <div className="row">
           <div className="col-12">
            <div className="text-center mt-5 mb-5 ">
              <img src="../images/logo.png"  />
            </div>
              <div className="row row-cols-1 row-cols-md-4 g-5 mb-5">
                {
                  pokemon?.map((poke)=> (
                    
                    <PokemonCard key={poke.id} pokemon={poke}></PokemonCard>
                  ))
                }
              </div>
              
           </div>
         </div>
    </div>
      
    </div> );
}
 
export default PokemanHeader;