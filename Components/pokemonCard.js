import Link from "next/link";
import { useRouter } from "next/router";

const PokemonCard = ({pokemon}) => {
    const clickpokemon = {
        
    }
    console.log(pokemon);

    const router = useRouter();
    return ( 
        <Link className="text-decoration-none" href={`/pokemon/${pokemon.name}`}>
            <div id="border-redues"  className="col rounded-top-3  bg-white shadow ">
                <div id="balklongwaarde">
                    <div  className="p-2">
                        <div >
                        <div  className="border rounded-end-4 text-center   rounded pt-n1 card rounded bg-body-secondary  bg-image hover-zoom" >
                            
                            <img className="card-img zoom " src={pokemon.image}  alt=""/>
                            
                        </div>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title text-black ">{pokemon.name}</h5>
                        
                    </div>
                </div>
                
            </div>
        </Link>
     );
}
 
export default PokemonCard;