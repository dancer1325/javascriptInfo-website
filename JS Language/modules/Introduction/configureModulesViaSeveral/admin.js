// Export it to delegate to another module the configuration
export let config = { };

export function sayHi() {
    alert(`Ready to serve, ${config.user}!`);
}
