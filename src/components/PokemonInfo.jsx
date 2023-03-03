import { Component } from "react";
import PokemonErrorView from "./PokemonErrorView";
import PokemonDataView from "./PokemonDataView";
import PokemonPendingView from "./PokemonPendingView";
import pokemonAPI from "../services/pokemon-fetch-api";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: "idle",
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        if (prevName !== nextName) {
            this.setState({ status: "pending" });
            // fetch ловить 404 помилки які дає бекенд
            pokemonAPI
                .fetchPokemon(nextName)
                .then(pokemon => this.setState({ pokemon, status: "resolved" }))
                .catch(error => this.setState({ error, status: "rejected" }));
        }
    }

    render() {
        const { pokemon, error, status } = this.state;
        const { pokemonName } = this.props;

        // патерн машина станів воно називається (state machine)
        if (status === "idle") {
            return <div>Enter pokemon name.</div>;
        }

        if (status === "pending") {
            return <PokemonPendingView pokemonName={pokemonName} />;
        }

        if (status === "rejected") {
            return <PokemonErrorView message={error.message} />;
        }

        if (status === "resolved") {
            return <PokemonDataView pokemon={pokemon} />;
        }
    }
}
