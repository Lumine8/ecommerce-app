import "./Error.css"
import {TbNumber5,TbNumber0} from "react-icons/tb"
import {CiFaceFrown} from "react-icons/ci"
export default function ErrorPage(){
    return(
        <div id="errorPage">
            <h1><TbNumber5/> <TbNumber0/> <TbNumber5/></h1>
            <h2>Something Went Wrong <CiFaceFrown size={50} style={{marginBottom:"-1rem"}}/> </h2>
        </div>
    )
}