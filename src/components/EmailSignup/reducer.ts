import localStore from 'src/utils/localStore';

type FormState = {
	errorMessage: string | null;
	submitted: boolean;
	valid: boolean;
	loading: boolean;
};

export enum AppEvents {
	VALID = 'VALID',
	ERROR = 'ERROR',
	SUBMIT = 'SUBMIT',
	CLEAR = 'CLEAR',
	LOADING = 'LOADING',
}

export const initialState: FormState = {
	errorMessage: null,
	submitted: false,
	valid: false,
	loading: false,
};

export type Actions =
	| { type: AppEvents.VALID }
	| { type: AppEvents.ERROR; payload: string }
	| { type: AppEvents.SUBMIT }
	| { type: AppEvents.CLEAR }
	| { type: AppEvents.LOADING };

export function reducer(state: FormState, action: Actions): FormState {
	switch (action.type) {
		case AppEvents.VALID:
			return {
				...state,
				errorMessage: null,
				valid: true,
				submitted: false,
			};

		case AppEvents.ERROR:
			return {
				...state,
				errorMessage: action.payload || null,
				valid: false,
				submitted: false,
				loading: false,
			};

		case AppEvents.SUBMIT:
			return {
				...state,
				errorMessage: null,
				valid: false,
				submitted: true,
				loading: false,
			};

		case AppEvents.CLEAR:
			return {
				...state,
				errorMessage: null,
			};

		case AppEvents.LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return { ...state };
	}
}
