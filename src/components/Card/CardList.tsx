/// <reference types="vite-plugin-svgr/client" />
import FilterIcon from "@public/filter.svg?react"
import { useFetchAllPostQuery } from "@src/services/Post.service"
import style from "./CardList.module.css"
import { Spinner } from "../Spinner/Spinner"
import { Card } from "./Card"
import { useTypeSelector } from "@src/hooks/useTypeRedux"
import { useActions } from "@src/hooks/useAction"
import clsx from "clsx"
export function CardList(){
    const {data,isLoading,isError} = useFetchAllPostQuery(null)
    const {filter,favorite} = useTypeSelector(state=>state.post)
    const isFiltered = filter == "favorite"
    const {setFilter} = useActions()
    const toggleFilter = () =>{
        if (!isFiltered){
            setFilter("favorite")
        }else{
            setFilter("base")
        }
    }
    return (
        <div className={style.body}>
            <div className={style.title}>Find {data?.length} post </div>
            <FilterIcon width={36} height={36} className={clsx(style.filter,isFiltered && style.active)} onClick={toggleFilter}/>
            <div className={style.list}>
                {data?.map((e)=>(favorite.includes(e.id) || !isFiltered) && (<Card card={e} key={e.id}/>))}
            </div>
            {isLoading && (<Spinner />)}
            {isError && (<div className="">Error</div>)}
        </div>
    )
}