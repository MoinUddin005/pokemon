import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Pokemon = ({ pokemon }) => {
    const router = useRouter();
    const { name } = router.query;

    console.log("singly data", pokemon);
    return (
        <div className="text-center">
            <div className="container ">
                <div className="text-center mt-5 mb-5 ">
                    <img src="../images/logo.png" />
                </div>
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="col-4 ">
                            <h1 className="text-primary mb-5">{pokemon.name}</h1>
                            <h5 className="mb-5">There is a plant seed on its back right from the day this Pokemon is born. The seed slowly grows larger.</h5>
                            <div className="card border-danger mb-3 w-50 h-50 border-3 text-center">
                                <div className="card-body d-flex gap-5 align-items-center">
                                    <div>
                                        <p className="fw-bold">Height</p>
                                        <p>{pokemon.height}</p>
                                    </div>
                                    <div>
                                        <p className="fw-bold">Weight</p>
                                        <p>{pokemon.weight}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <img className="h-100 w-100" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" />
                        </div>

                        <div className="col-4">
                            <p className="fw-bold mb-2">Type</p>
                            <button type="button" className="btn1">
                                {pokemon.types[0].type.name}
                            </button>
                            <button type="button" className="btn2">
                                {pokemon.types[1]?.type.name}
                            </button>{" "}
                            :<p className="fw-bold mt-5">Weakness</p>
                            <button type="button" className="btn3">
                                Fire
                            </button>
                            <button type="button" className="btn4">
                                Psychic
                            </button>
                            <button type="button" className="btn5">
                                Flying
                            </button>
                            <button type="button" className="btn6">
                                Fire
                            </button>
                            <div className="mt-5">
                                <p> {pokemon.stats[0].stat.name} </p>
                                <div className="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${pokemon.stats[0].base_stat}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {pokemon.stats[0].base_stat}%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p> {pokemon.stats[1].stat.name} </p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${pokemon.stats[1].base_stat}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {pokemon.stats[1].base_stat}%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p> {pokemon.stats[2].stat.name} </p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${pokemon.stats[2].base_stat}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {pokemon.stats[2].base_stat}%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p> {pokemon.stats[3].stat.name} </p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${pokemon.stats[3].base_stat}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {pokemon.stats[3].base_stat}%
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p> {pokemon.stats[4].stat.name} </p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: `${pokemon.stats[4].base_stat}%` }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        {pokemon.stats[4].base_stat}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link href="/">
            <button className="h-25 bg-warning text-white border border-4 border-primary" type="button">
                Back to Home page
            </button>
            </Link>
        </div>
    );
};

export default Pokemon;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`);
    const pokemon = await response.json();

    return {
        props: { pokemon },
    };
}
