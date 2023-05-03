import { HeaderContainerStyle } from "./style";
import { Outlet } from 'react-router-dom'

export function Header(){
    return(
        <HeaderContainerStyle>
            
            <header>
                <img src="src\assets\Cover.png"/>
            </header>
            <img id="img-logo" src="src\assets\logo.svg"/>

            <Outlet/>
         </HeaderContainerStyle>

    )
}