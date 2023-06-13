import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/TopicsSlice";
import quizReducer from "../features/quizzes/QuizzesSlice";
import cardReducer from "../features/cards/CardsSlice";

export default configureStore({
    reducer: {
        topics: topicReducer,
        quizzes: quizReducer,
        cards: cardReducer,
    },
});