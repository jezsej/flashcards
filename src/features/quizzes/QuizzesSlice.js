import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

const initialState = {
    quizzes: {},
}


export const quizActionCreator = (payload) => {

    const { id, name, topicId, cardIds } = payload;

    return (dispatch) => {
        dispatch(addQuiz({ id, name, topicId, cardIds }))
        dispatch(addQuizId({ topicId, quizId: id }));
    }
}


const quizSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz(state, action) {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = { id, name, topicId, cardIds };
        }

    }
})

export const selectQuizzes = state => state.quizzes.quizzes;

export const { addQuiz } = quizSlice.actions;

export default quizSlice.reducer;