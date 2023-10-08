import axios from "axios";

/**
 * @typedef {Object} Joke
 * @property {string} setup - The setup of the joke.
 * @property {string} punchline - The punchline of the joke.
 */

/**
 * returns a random joke from an api
 * @returns {Joke}
 */
export async function getJoke() {
	// Obtain the response from API
    try{
	const response = await axios.get(
		"https://official-joke-api.appspot.com/random_joke"
	);

	// Parse the response
	const {setup, punchline} = response.data;

	return {
		setup,
		punchline,
	};
} catch (err) {
    console.log('Fetching err: ', err)
    return {
        setup: "Error",
        punchline: "Please try again later"
    };
}
}

// Sample Test
async function tester() {
    try{

        const joke = await getJoke();
        console.log(joke);
    } catch (err) {
        console.log(err)
    }

}
tester()
