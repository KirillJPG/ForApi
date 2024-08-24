import { Wrapper } from "@components/layout/Wrapper"
import { useParams } from "react-router"

export function Product(){
    const {id} = useParams<{id:string}>()
    
    return (
        <Wrapper>
            id {id}
        </Wrapper>
    )
}