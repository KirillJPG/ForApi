import { Post } from "@model/Post.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = "base" | "favorite"
interface PostState {
    favorite:number[],
    filter:Filter
}
const initialState:PostState = {
    favorite:[],
    filter:"base"
}
export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{
        setFilter:(state,action:PayloadAction<Filter>) =>{
            state.filter = action.payload
        },
        addFavorite:(state,action:PayloadAction<number>)=>{
            state.favorite.push(action.payload)
        },
        removerFavorite:(state,action:PayloadAction<number>)=>{
            state.favorite = state.favorite.filter(e=>e!=action.payload)
        }
    },
})