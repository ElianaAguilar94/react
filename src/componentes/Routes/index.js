import React from 'react';
import App  from '../../App';
import { Route, Link } from 'react-router-dom';
import './cssRoutes.css';
import imgPokemon1 from '../../../src/pokemon1.jpg';

class Routes extends  React.Component {
    render(){
        return(
            <div>
                <Route path="/" exact={true} component={App}/>
                <Route path="/anexos" component={Anexo}/>
            </div>
        )
    }
}

const Anexo= (props) =>{
    return(
        <div className="container-anexo">
           <div className="body-anexo">
                <div className="item">
                    <Link to="/"> Volver</Link> 
                </div>
                <div className="item"> 
                    <img src={imgPokemon1} className="anexo-logo" alt="pokemon1" />
                </div>
                <div className="item">
                    <h2 >Propiedad pokemon es: </h2>
                </div>
                <div className="item2">
                    <em>{props.location.url}</em>
                </div>
           </div> 
        </div>
    ) 
}

export default Routes