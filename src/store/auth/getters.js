export function isAuthenticated (/* state */state) {
    return !!state.token;
}
