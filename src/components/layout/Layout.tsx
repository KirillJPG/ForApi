import { Header } from "@components/Navigation/Header";
import { Outlet } from "react-router";
import style from "./Layout.module.css"
import { Wrapper } from "./Wrapper";
export function Layout(){
    return (
        <div className={style.layout}>
            <Header />
            <Wrapper>
                <Outlet />
            </Wrapper>
        </div>
    )
}