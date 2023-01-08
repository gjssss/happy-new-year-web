export function load(ms) {
    return new Promise((resolve, reject) => { setTimeout(resolve, ms, 'done') })
}