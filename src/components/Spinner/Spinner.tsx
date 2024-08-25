/// <reference types="vite-plugin-svgr/client" />
import style from "./Spinner.module.css"
import SpinnerIcon from "@public/loading.svg?react"
export function Spinner(){
    return (
            <SpinnerIcon className={style.spinner} width={50} height={50} />
    )
}