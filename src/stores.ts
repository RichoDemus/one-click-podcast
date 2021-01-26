import { writable } from 'svelte/store'
import { defaultPattern, ekotId } from './constants'

export const podcastId = writable(localStorage.getItem('podcast_id') || ekotId)
podcastId.subscribe((val) => localStorage.setItem('podcast_id', val))

export const resetPodcastId = () => {
    podcastId.set(ekotId)
}

export const episodePattern = writable(
    localStorage.getItem('episode_pattern') || defaultPattern
)
episodePattern.subscribe((val) => localStorage.setItem('episode_pattern', val))

export const resetEpisodePattern = () => {
    episodePattern.set(defaultPattern)
}
