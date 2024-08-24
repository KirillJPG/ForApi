import { bindActionCreators } from "@reduxjs/toolkit"
import { useTypeDispatch } from "./useTypeRedux"
import { useMemo } from "react"
import { postSlice } from "@store/slice/Post.slice"

export const rootActions ={    
    ...postSlice.actions,
}
export function useActions(){
    const dispatch = useTypeDispatch()
    return useMemo(()=>bindActionCreators(rootActions,dispatch),[dispatch])
}
