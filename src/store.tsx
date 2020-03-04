import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../src/reducers/rootReducer'
import thunk, { ThunkMiddleware } from 'redux-thunk'

// const REDUXDEVTOOLS = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
    // const initialState = {
    //     countOfQuestion: 1,
    //     usercorrect: 0,
    //     allquestions: [],
    //     started: false,
    //     totalquestions: 0,
    // }
    // return createStore(rootReducer, initialState, REDUXDEVTOOLS);
    return createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware));
}

export default configureStore;