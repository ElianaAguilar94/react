import React from 'react';
import './Hijo.css';
import imgPokemon from '../../src/pokemon.jpg';
import { Link } from 'react-router-dom';

class Hijo extends  React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <div className="body-hijo">
                {this.props.value.map((data,i)=>(
                    <div className="Hijo-card" key={i}>
                        <div> 
                            <img src={imgPokemon} className="hijo-logo" alt="pokemon" />
                        </div>
                        <div className="text-card">
                            <div >Id: {i} </div>
                            <div>Nombre: {data.name}</div>
                        </div>
                        <div> 
                            <Link to={{
                                pathname:'/anexos',
                                url:data.url
                            }}>Ver más info</Link>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Hijo;