import tw from 'twin.macro'
import styled from 'styled-components'

export const ProfileContainerStyle = styled.div`
    ${tw`
        flex
        gap-8
        py-8
        px-10
        rounded-lg
        mb-[72px]
        bg-base-profile
    `}

    h1{
        ${tw`
            flex
            justify-between
            mb-2
            font-bold
            text-2xl
        `}

        a{
            ${tw`
                flex
                gap-2
                justify-center
                text-blue
                text-sm

            `}
        }
        
    }

    img{
        ${tw`
            max-w-[148px]
            rounded-lg
        `}
    }
`

export const ProfileInfoStyle = styled.div`
    ${tw`
        flex
        flex-col
        gap-8
    `}

    #subtitle-profile{
        ${tw`
            flex
            gap-6
            text-base-subtitle
            leading-relaxed
        `}

        span{
            ${tw`
                flex
                items-center
                gap-2
            `}
        }
    }
`