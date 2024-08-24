import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slice/Post.slice";
import { postService } from "@services/Post.service";


export const rootReducers = combineReducers({
    post:postSlice.reducer,
    [postService.reducerPath]:postService.reducer
})
export const store = configureStore({
    reducer:rootReducers,
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(postService.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>
export type RootReducer = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch