import "./Error.css"
import {TbNumber5,TbNumber0} from "react-icons/tb"
import {FaRegFaceDizzy, } from "react-icons/fa6"

export default function ErrorPage(){
    return(
        <div id="errorPage">
            <h1><TbNumber5/> <TbNumber0/> <TbNumber5/></h1>
            <h2>Something Went Wrong <FaRegFaceDizzy size={50} style={{marginBottom:"-1rem"}}/> </h2>
            <p>Try Signing in, maybe.</p>
        </div>
    )
}