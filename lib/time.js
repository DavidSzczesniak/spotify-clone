export function convertToMinutesAndSeconds(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

    if (seconds === 60) {
        return `${minutes + 1}:00`;
    }
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
