/// <reference types="vite-plugin-svgr/client" />
import LikeIcon from "@public/like.svg?react"
import { Post } from "@src/model/Post.interface";
import style from "./Card.module.css"
import { useTypeSelector } from "@src/hooks/useTypeRedux";
import { useActions } from "@src/hooks/useAction";
import clsx from "clsx";
import { MouseEvent } from "react";
import { useNavigate } from "react-router";

export function Card({card}:{card:Post}){
    const navitagion = useNavigate()
    const {favorite} = useTypeSelector(state=>state.post)
    const {addFavorite,removerFavorite} = useActions()
    const isFavorite = favorite.includes(card.id)
    const toggleFavorite = (e:MouseEvent<SVGSVGElement>) =>{
        e.stopPropagation()
        isFavorite ? removerFavorite(card.id) : addFavorite(card.id)
    }
    return(
        <div className={style.card} onClick={()=>navitagion(`/product/${card.id}`)}>
            <div className={style.title}>{card.title}</div>
            <div className={style.body}>{card.body}</div>
            <LikeIcon height={50} width={50} className={clsx(style.like,isFavorite && style.active)} onClick={toggleFavorite}/>
        </div>
    )
}