import Link from "next/link";
import { useRouter } from "next/router";

const PokemonCard = ({pokemon}) => {
    const clickpokemon = {
        
    }
    console.log(pokemon);

    const router = useRouter();
    return ( 
        <div className="col">
            <div class="card " >
            <img src={pokemon.image}  onClick={() => router.push(pokemon?.url)}  class="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <a href={pokemon.url} class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
     );
}
 
export default PokemonCard;