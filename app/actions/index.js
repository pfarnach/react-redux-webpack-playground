export const ACTION_TYPES = {
	setNav: 'SET_NAV'
};

export function setNav(selectedNav) {
	return {
		type: ACTION_TYPES.setNav,
		payload: selectedNav
	}
}