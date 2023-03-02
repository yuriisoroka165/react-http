import { Component } from "react";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
        error: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.pokemonName !== this.props.pokemonName) {
            this.loadingControl(false);
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => response.json())
                .then(pokemon => this.setState({ pokemon }))
                .catch(error => this.setState({ error }))
                .finally(this.loadingControl(false));
        }
    }

    loadingControl(value) {
        this.setState({ loading: value });
    }

    render() {
        const { pokemon, loading, error } = this.state;
        const { pokemonName } = this.props;
        return (
            <div>
                {error && <h1>Crash...</h1> }
                {loading && <div>Loading.....</div>}
                {!pokemonName && <div>Enter pokemon name.</div>}
                {pokemon && (
                    <div>
                        <p>{pokemon.name}</p>
                        <img
                            src={
                                pokemon.sprites.other["official-artwork"]
                                    .front_default
                            }
                            width="240"
                            alt={pokemon.name}
                        />
                    </div>
                )}
            </div>
        );
    }
}
