import { Header } from "./components/Header/Header"
import { Profile } from "./components/Profile/Profile"
import { Publications } from "./components/Publication/Publications"
import { Search } from "./components/Search/Search"
import { HomeContainerStyle, HomeInfoStyle } from "./style"

export function Home(){
    
    return(
        
        <HomeContainerStyle>
            
            <Header/>

            <HomeInfoStyle>
                <Profile/>
                <Search/>
                <Publications/>
           </HomeInfoStyle>

        </HomeContainerStyle>
        
    )
}