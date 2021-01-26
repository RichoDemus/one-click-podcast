<script lang="ts">
    import { clientId, getAddress, scope } from './constants'
    import Switch from './Switch.svelte'

    import { onMount } from 'svelte'

    import queryString from 'query-string'
    import {
        episodePattern,
        podcastId,
        resetPodcastId,
        resetEpisodePattern,
    } from './stores'
    let access_token: string = null

    let podcastName: string = ''
    let episodeToPlay: any = null

    let customize: boolean = false
    let loading: boolean = false

    console.log('host is ', getAddress())

    function loginClick() {
        window.location.href =
            'https://accounts.spotify.com/authorize?client_id=' +
            clientId +
            '&scope=' +
            scope +
            '&response_type=token&redirect_uri=' +
            getAddress()
    }

    function logoutClick() {
        access_token = null
        episodeToPlay = null
    }

    function queueEpisode() {
        fetch(
            'https://api.spotify.com/v1/me/player/queue?uri=' +
                episodeToPlay.uri,
            {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
            }
        )
    }

    onMount(async () => {
        loading = true
        const parsed = queryString.parse(location.hash)
        access_token = parsed.access_token

        // remove token from url
        access_token &&
            window.history.replaceState({}, document.title, getAddress())

        access_token && console.log('Access Token: ', access_token)

        await updateEpisodeToPlay()
    })

    async function updateEpisodeToPlay() {
        if (access_token) {
            fetch('https://api.spotify.com/v1/shows/' + $podcastId, {
                headers: {
                    Authorization: 'Bearer ' + access_token,
                },
            })
                .then((response) => response.json())
                .then((data) => (podcastName = data.name))

            const episodes = await fetch(
                'https://api.spotify.com/v1/shows/' + $podcastId + '/episodes',
                {
                    headers: {
                        Authorization: 'Bearer ' + access_token,
                    },
                }
            )
                .then((response) => response.json())
                .then((data) =>
                    data.items.map((item) => ({
                        id: item.id,
                        name: item.name,
                        uri: item.uri,
                    }))
                )

            episodeToPlay = episodes.find((ep) =>
                ep.name.toLowerCase().includes($episodePattern.toLowerCase())
            )
        }
        loading = false
    }

    function setPodcastIdToDefault() {
        resetPodcastId()
        updateEpisodeToPlay()
    }
    function setEpisodePatternoDefault() {
        resetEpisodePattern()
        updateEpisodeToPlay()
    }
</script>

<main>
    <h1>One Click Podcast</h1>
    {#if access_token}
        <button on:click|once={logoutClick}> Logout </button>
        {#if episodeToPlay}
            <p>Podcast: {podcastName}</p>
            <p>Episode: {episodeToPlay.name}</p>
            <button on:click|once={queueEpisode}> Add to queue </button>
        {:else if !loading}
            <p>No episode found, check id and pattern</p>
        {/if}
        {#if access_token && !loading}
            <p>Change episode</p>
            <Switch bind:checked={customize} />
        {/if}
        {#if customize && !loading}
            <div>
                <p>
                    Podcast id: <input
                        bind:value={$podcastId}
                        on:input={updateEpisodeToPlay}
                    /><button on:click={setPodcastIdToDefault}>default</button>
                </p>
                <p>
                    Episode should contain: <input
                        bind:value={$episodePattern}
                        on:input={updateEpisodeToPlay}
                    /><button on:click={setEpisodePatternoDefault}
                        >default</button
                    >
                </p>
            </div>
        {/if}
    {:else}
        <button on:click|once={loginClick}> Login </button>
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
