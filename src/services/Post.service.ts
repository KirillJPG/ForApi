import { Post } from "@model/Post.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postService = createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/posts"}),
    reducerPath:"postApi",
    tagTypes:["post"],
    endpoints:(build)=> ({
        fetchAllPost:build.query<Post[],null>({
            query:()=>"/"
        }),
        fetchPostById:build.query<Post,number | string >({
            query:(id)=>`/${id}`
        }),
    }),

})
export const {useFetchAllPostQuery,useFetchPostByIdQuery} = postService