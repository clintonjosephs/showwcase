import Education from "../../models/education";
import University from "../../models/university";
import Person from "../../models/person";

// action addresses
const CREATE_USER = 'CREATE_USER';
const CREATE_EDUCATION = 'CREATE_EDUCATION';
const ADD_UNIVERSITIES = 'ADD_UNIVERSITIES';

type stateType = {
    person: Person;
    education: Education[];
    universities: University[];
}

// inital state
const initialState: stateType = {
    person: new Person('', '', ''),
    education: [],
    universities: [],
}

// actions
export const createUser = (person: Person) => ({
    type: CREATE_USER,
    payload: person
});

export const createEducation = (education: Education) => ({
    type: CREATE_EDUCATION,
    payload: education
});

export const addUniversities = (universities: University[]) => ({
    type: ADD_UNIVERSITIES,
    payload: universities
});

// reducer
const educationReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case CREATE_USER:
            return { ...state, person: payload };
        case CREATE_EDUCATION:
            return { ...state, education: [...state.education, payload] };
        case ADD_UNIVERSITIES:
            return { ...state, universities: payload };
        default:
            return state;
    }
};

export default educationReducer;