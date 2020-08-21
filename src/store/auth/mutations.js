import axios from 'axios'
export function auth_success (/* state */state,data) {

	state.status = 'success';
	state.token = data;
	localStorage.setItem('token',state.token);
}


export function remove_auth (/* state */state) {

	state.status = null;
	state.token = null;
	localStorage.removeItem('token');

}
