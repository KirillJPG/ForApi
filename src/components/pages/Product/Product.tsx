import { useParams } from "react-router"
import { Link } from "react-router-dom"
import style from "./Product.module.css"
import { useFetchPostByIdQuery } from "@src/services/Post.service"
import { Spinner } from "@src/components/Spinner/Spinner"
export function Product(){
    const {id} = useParams<{id:string}>()
    const {data,isLoading,isError} = useFetchPostByIdQuery(id!)
    return (
        <div className={style.body}>
            <div className="">
                <Link className={style.link} to={"/"}>Back</Link>
            </div>
            {isLoading ? <Spinner /> : (
                <>
                <div className={style.title}>{data?.title}</div>
                <div className={style.text}>{data?.body}</div>
                </>
            )}
            {isError && (
                <div className="">Error</div>
            )}
        </div>
    )
}