function fetchPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
        if (response.ok) {
            return response.json(); //якщо все ок то вертається респонс
        }
        return Promise.reject(
            new Error(`No pokemon with that name ${name}`)
        ); //якщо ні реджектимо проміс з виводом повідомлення
    });
}

const api = {
    fetchPokemon,
};

export default api;
