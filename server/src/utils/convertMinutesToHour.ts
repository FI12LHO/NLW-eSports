export function convertMinutesToHourString(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;

    return `${String(hours).padStart(2, '0')}:${String(rest).padStart(2, '0')}`;
}