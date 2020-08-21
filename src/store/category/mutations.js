import axios from 'axios'
export function setCategory (/* state */state,data) {
	state.category=data;
}

export function category_remove (/* state */state,index) {
	state.category.splice(index,1);
}


