import { Component } from "react";
import { ToastContainer } from "react-toastify";
import PokemonForm from "./PokemonForm";
import PokemonInfo from "./PokemonInfo";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
    state = {
        pokemonName: "",
    };

    handleFormSubmit = pokemonName => {
        this.setState({ pokemonName });
    };

    render() {
        const { pokemonName } = this.state;
        return (
            <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
                <PokemonForm onSubmit={this.handleFormSubmit} />
                <PokemonInfo pokemonName={pokemonName} />
                <ToastContainer autoClose={3000} />
            </div>
        );
    }
}

export default App;

// неправильно
// state = {
//         pokemon: null,
//         loading: false,
//     };

//     loadingControl(value) {
//         this.setState({ loading: value });
//     }

//     componentDidMount() {
//         this.loadingControl(true);
//         fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//             .then(response => response.json())
//             .then(pokemon => this.setState({ pokemon }))
//             .finally(() => this.loadingControl(false));
//     }

//     render() {
//         const { pokemon, loading } = this.state;
//         return (
//             <div style={{ maxWidth: 1170, margin: "0 auto", padding: 20 }}>
//                 {loading && <h1>Loading....</h1>}
//                 {pokemon && <div>{pokemon.name}</div>}
//             </div>
//         );
//     }
