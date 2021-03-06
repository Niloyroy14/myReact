import { useEffect, useReducer } from "react";


const initialState = {
    loading: true,
    post: {},
    error: '',
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            };

        case 'ERROR':
            return {
                loading: false,
                post: {},
                error: 'There was a problem!'
            };

        default:
            return state;

    }
}


export default function GetPost2() {

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((data) => {
                dispatch({
                    type: 'SUCCESS', result: data
                })
            })
            .catch(err => {
                dispatch({ type: 'ERROR' })
            })
    }, [])


    return (
        <div>
            {state.loading ? 'Loading.............' : state.post.title}
            {state.error || ''}
        </div>
    );


}