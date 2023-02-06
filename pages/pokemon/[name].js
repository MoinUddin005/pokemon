import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Pokemon = ({ pokemon }) => {

    const router = useRouter();
    const { name } = router.query;

    console.log("singly data", pokemon);
    return (
        <div>
            <div className='container'>
                <div className="text-center mt-5 mb-5 ">
                <img src="../images/logo.png"  />
                </div>
                <div className='row'>
                    <div className='col-12 d-flex'>
                        <div className='col-4'>
                            <h1>{pokemon.name}</h1>
                            



                            
                        </div>

                        <div className='col-4'>
                        <h1>emon asoda</h1>
                        </div>

                        <div className='col-4'>
                        <h1>emon asoda</h1>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Pokemon;


export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json()

    return {
        props: { pokemon }
    }
}