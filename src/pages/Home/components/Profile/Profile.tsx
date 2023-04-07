import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react";
import { ProfileContainerStyle, ProfileInfoStyle } from "./style";

export function Profile(){

    return(
        <div>
            <ProfileContainerStyle>
                <img src="src\assets\avatar.svg" />
                <ProfileInfoStyle>
                    <div>
                        <h1>Cameron Williamson
                            <a href="https://www.twitch.tv/luquet4">
                                GITHUB
                                <ArrowSquareOut size={16} weight="bold"/>
                            </a>
                        </h1>
                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                        </p>
                    </div>

                    <div id="subtitle-profile">
                        <span> <img src="src\assets\logoGitHub.svg"/> cameronwll</span>
                        <span><img src="src\assets\company.svg"/> Rocketseat</span>
                        <span><img src="src\assets\followers.svg"/> 32 seguidores</span>
                    </div>
                </ProfileInfoStyle>
            </ProfileContainerStyle>
        </div>
    )
}