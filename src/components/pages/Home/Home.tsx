import { useActions } from "@src/hooks/useAction"
import { useFetchAllPostQuery } from "@src/services/Post.service"

export function Home(){
    const {isError,isLoading,data} = useFetchAllPostQuery(null)
    return (
        <div className="">
            {data?.map((e)=><div>{e.title}</div>)}
            {isLoading && (
                <>loading...</>
            )}
        </div>
    )
}