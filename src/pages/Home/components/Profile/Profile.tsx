import { ArrowSquareOut } from "@phosphor-icons/react";
import { ProfileContainerStyle, ProfileInfoStyle } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../../../lib/axios";


interface ProfileProps{
    name: string,
    avatar_url: string,
    login: string,
    company: string,
    followers: number,
    html_url: string,
    bio: string
}

export function Profile(){

    const [infoPerfil, setInfoPerfil] = useState<ProfileProps>()

    useEffect(() => {

        api('/users/femendesf')
        .then(response => {
            setInfoPerfil(response.data)
        })

    }, 
    [])

    return(
        <div>
            <ProfileContainerStyle>
                <img src={infoPerfil?.avatar_url} />
                <ProfileInfoStyle>
                    <div>
                       
                        <h1>{infoPerfil?.name}
                            <a href={infoPerfil?.html_url} target="_blank">
                                GITHUB
                                <ArrowSquareOut size={16} weight="bold"/>
                            </a>
                        </h1>
                        <p>{infoPerfil?.bio}
                        </p>
                    </div>

                    <div id="subtitle-profile">
                        <span> <img src="src\assets\logoGitHub.svg"/> {infoPerfil?.login}</span>
                        {infoPerfil?.company ? <span><img src="src\assets\company.svg"/>{infoPerfil.company}</span> : ''}
                        <span><img src="src\assets\followers.svg"/>{infoPerfil?.followers} seguidores</span>
                    </div>
                </ProfileInfoStyle>
            </ProfileContainerStyle>
        </div>
    )
}