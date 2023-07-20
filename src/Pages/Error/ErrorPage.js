import "./Error.css"
import {TbNumber5,TbNumber0} from "react-icons/tb"
import {FaRegFaceDizzy, } from "react-icons/fa6"
import {RxExclamationTriangle} from "react-icons/rx"

export default function ErrorPage(){
    return(
        <div id="errorPage">
            <h1><TbNumber5 size={50}/>
             {/* <TbNumber0 style={{marginBottom:"-1rem"}}/>  */}
             <FaRegFaceDizzy size={50} style={{marginBottom:"-1rem"}}/> 
             <TbNumber5 size={50}/></h1>
            <h2> <RxExclamationTriangle size={30} style={{marginBottom:"-0.5rem"}} /> Uh Oh, Something Went Wrong <RxExclamationTriangle size={30} style={{marginBottom:"-0.5rem"}} /></h2>
            <p>Try Signing in, maybe.</p>
        </div>
    )
}