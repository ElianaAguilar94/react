import React from 'react';
import './App.css';
import Hijo from './componentes/Hijo'

class App extends  React.Component {

  constructor(props){
    super(props)
    this.state={
      loading:true,
      items:[],
      messageRequest:'',
    }
  }

  componentDidMount(){
    this.setState({messageRequest:'Cargando información'})

    setTimeout(() => {
      
      fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
      .then(res=>res.json())
      .then((result)=>{
        this.setState({loading:false,items:result.results,messageRequest:''})
      })
      .catch(()=>this.setState({messageRequest:'Hubo un error cargando los datos'}))

    }, 1000);

  }

  render(){
  if (this.state.loading) return <p>{this.state.messageRequest}</p>     
    return (
      <div className="App App-react">
        <Header></Header>
        <Hijo value={this.state.items}></Hijo>
      </div>
    );
  }
}

const Header = () => 
      <header>
        <p className="App-titulo">Taller React</p>
      </header>

export default App;
