const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters : []
		},
		actions: {
			getCharacters: () => {
				fetch('https://www.swapi.tech/api/people')
					.then(resp => resp.json())
					.then(data => setStore ({characters:data.results} ))
					.catch(error => console.log(error))

			}
		}
	};
};

export default getState;
