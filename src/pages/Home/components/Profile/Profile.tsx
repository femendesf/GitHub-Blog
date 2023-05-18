import { ArrowSquareOut } from "@phosphor-icons/react";
import { ProfileContainerStyle, ProfileInfoStyle } from "./style";
import { useContext } from "react";

import { PublicationsContext } from "../../../../context/PublicationsContext";

export function Profile(){

   const {infoProfile} = useContext(PublicationsContext)

    return(
        <div>
            
            <ProfileContainerStyle>
                <img src={infoProfile?.avatar_url} />
                <ProfileInfoStyle>
                    <div>
                       
                        <h1>{infoProfile?.name}
                            <a href={infoProfile?.html_url} target="_blank">
                                GITHUB
                                <ArrowSquareOut size={16} weight="bold"/>
                            </a>
                        </h1>
                        <p>{infoProfile?.bio}
                        </p>
                    </div>

                    <div id="subtitle-profile">
                        <span> <img src="src\assets\logoGitHub.svg"/> {infoProfile?.login}</span>
                        {infoProfile?.company ? <span><img src="src\assets\company.svg"/>{infoProfile?.company}</span> : ''}
                        <span><img src="src\assets\followers.svg"/>{infoProfile?.followers} seguidores</span>
                    </div>
                </ProfileInfoStyle>
            </ProfileContainerStyle>
        </div>
    )
}