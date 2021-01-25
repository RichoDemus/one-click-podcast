<script lang="ts">
	import {clientId, ekotId, getAddress, scope} from "./constants";

	import {onMount} from "svelte";

	import queryString from "query-string";
	export let name: string;
	let access_token: string = null;

	let episodeToPlay: any = null;

	// const storedTheme = localStorage.getItem("access_token");
	// export const theme = writable(storedTheme);
	// theme.subscribe(value => {
	// 	localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
	// });

	console.log("host is ", getAddress());

		function loginClick() {
		window.location.href = "https://accounts.spotify.com/authorize?client_id=" + clientId + "&scope=" + scope + "&response_type=token&redirect_uri=" + getAddress();
	}

	function logoutClick() {
			access_token = null;
			episodeToPlay = null;
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
		access_token = parsed.access_token;

		if(access_token) {
			// remove token from url
			window.history.replaceState({}, document.title, getAddress());
		}

		if(access_token) {
			const episodes = await fetch("https://api.spotify.com/v1/shows/" + ekotId + "/episodes",{
			    headers: {
  				    'Authorization': "Bearer " + access_token
    		}
			})
			  .then(response => response.json())
			  .then(data => data.items.map(item => ({id:item.id, name:item.name, uri: item.uri})));

			episodeToPlay = episodes.find(ep => ep.name.includes("sammanfattning av dagens nyheter"));
		}
	});
</script>

<main>
	<h1>One Click Podcast</h1>
	{#if access_token}
		<button on:click|once={logoutClick}>
			Logout
		</button>
	{:else}
		<button on:click|once={loginClick}>
			Login
		</button>
	{/if}
	{#if episodeToPlay}
		<p>Episode: {episodeToPlay.name}</p>
		<button on:click|once={queueEpisode}>
			Add to queue
		</button>
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
