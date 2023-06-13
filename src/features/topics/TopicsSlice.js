import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    topics: {},
}

const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(state, action) {
            const { id, name, icon, quizIds } = action.payload;
            state.topics[id] = { id, name, icon, quizIds };
        },
        addQuizId(state, action) {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    },
})

export const selectTopics = state => state.topics.topics;

export const { addTopic, addQuizId } = topicSlice.actions;

export default topicSlice.reducer;