import tw from 'twin.macro'
import styled from 'styled-components'

export const IssueContainerStyle = styled.main`
    
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        w-[864px]
        animate-[opacity_0.5s]
    `}

`

export const StyleInfoIssue = styled.div`

    ${tw`
        flex
        flex-col
        p-8
        rounded-lg
        
        bg-base-profile
        w-full
        
    `}

    nav{

        ${tw`
            flex
            items-center
            justify-between
            w-full
            mb-5
        `}

        a{
            ${tw`
                flex
                gap-2
                justify-center
                text-blue
                text-xs
                font-bold
            `}
        }

        }

        h1{
            ${tw`
                text-2xl
                font-bold
            `}
        }

        div{
            ${tw`
                flex
                gap-8

                mt-2
            `}

        span{
            ${tw`
                flex
                items-center
                gap-2
                text-base-span
            `}
        }
}
`

export const StyleTextIssue = styled.div`

    ${tw`
        flex
        flex-col
        items-center
        justify-center
        py-10
        px-8
        gap-6
        animate-[opacity_1.5s]
    `}
    p{

    }



    h1{
        ${tw`
            text-white
        `}
    }


    h2{
        ${tw`
            text-blue
        `}
    }

    h3{
        ${tw`
            text-blue
            underline
            font-bold
        `}
    }

    li{
        ${tw`
            text-base-span
        `}

        strong{
            ${tw`
                text-base-text
                font-bold
                underline
            `}
        }
    }

`
