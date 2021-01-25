<script lang="ts">

	const ekot_id = "0p92p8lG4Gz8fhZvcwSMxD";
	// const redirectUrl = "http://localhost:5000"
	const redirectUrl = "https://richodemus.github.io/one-click-podcast/"

	import {onMount} from "svelte";
	// import {access_token} from "./stores";
import queryString from "query-string";
	export let name: string;
	let access_token: string = null;

	let episodeToPlay: any = null;

	// const storedTheme = localStorage.getItem("access_token");
	// export const theme = writable(storedTheme);
	// theme.subscribe(value => {
	// 	localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
	// });

		function loginClick() {
		window.location.href = "https://accounts.spotify.com/authorize?client_id=d88b089d3c9f4376911d9f56565849fc&scope=user-modify-playback-state&response_type=token&redirect_uri=" + redirectUrl;
	}

	function logoutClick() {
			access_token = null;

	}

	function queueEpisode() {
		fetch("https://api.spotify.com/v1/me/player/queue?uri=" + episodeToPlay.uri, {
		method: 'POST',
					    headers: {
  				    'Authorization': "Bearer " + access_token
    		}
		})
	}

	onMount(async () => {
		const parsed = queryString.parse(location.hash);
		console.log("token", parsed.access_token);
		access_token = parsed.access_token;

		if(access_token) {
			// remove token from url
			window.history.replaceState({}, document.title, "/");
		}

		if(access_token) {
			// fetch("https://api.spotify.com/v1/me",{
			//     headers: {
  			// 	    'Authorization': "Bearer " + access_token
    		// }
			// })
			//   .then(response => response.json())
			//   .then(data => console.log(data));



			const episodes = await fetch("https://api.spotify.com/v1/shows/" + ekot_id + "/episodes",{
			    headers: {
  				    'Authorization': "Bearer " + access_token
    		}
			})
			  .then(response => response.json())
			  .then(data => data.items.map(item => ({id:item.id, name:item.name, uri: item.uri})));

			console.log("episodes:", episodes)
			episodeToPlay = episodes.find(ep => ep.name.includes("sammanfattning av dagens nyheter"));
			console.log("wanna play:", episodeToPlay)
		}
	});


</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Cool beans, token: {access_token}</p>
	<button on:click|once={loginClick}>
		Login
	</button>
	<button on:click|once={logoutClick}>
		Logout
	</button>
	{#if access_token}
		<p>has token</p>
	{:else}
		<p>no token</p>
	{/if}
	{#if episodeToPlay}
		<p>Episode: {episodeToPlay.name}</p>
		<button on:click|once={queueEpisode}>
			Add to queue
		</button>
	{:else}
		<p>No epsidode found :(</p>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>