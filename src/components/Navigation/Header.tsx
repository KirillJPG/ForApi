import { NavLink } from "react-router-dom"
import style from "./Header.module.css"
import clsx from "clsx"
import { Wrapper } from "@components/layout/Wrapper"
export function Header(){
    return (
        <div className={style.body}>
            <Wrapper>
                <NavLink   className={({isActive})=>clsx(isActive && style.select,style.link)} to={"/"}>Home</NavLink>
            </Wrapper>  
        </div>  
    )
}