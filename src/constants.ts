export const ekotId = '0p92p8lG4Gz8fhZvcwSMxD'
export const clientId = 'd88b089d3c9f4376911d9f56565849fc'
export const scope = 'user-modify-playback-state'

export const getAddress = () => {
    if (isLocal()) {
        return 'http://localhost:5000'
    }
    return 'https://richodemus.github.io/one-click-podcast/'
}

function isLocal() {
    return (
        location.hostname === 'localhost' ||
        location.hostname === '127.0.0.1' ||
        location.hostname === ''
    )
}
