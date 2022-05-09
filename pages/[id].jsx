import React from "react"
import Router,{useRouter} from "next/router"

const Page = () =>{
    const router = useRouter();
    return <p>{router.query.id}</p>
}

export default Page