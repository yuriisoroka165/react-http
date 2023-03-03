import errorImage from "./maxim.jpg";

export default function PokemonFallbackView({ message }) {
    return (
        <div role="alert">
            <img src={errorImage} width="240" alt="Maxim" />
            {message}
        </div>
    );
}
