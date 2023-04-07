import tw from 'twin.macro'
import styled from 'styled-components'

export const HeaderContainerStyle = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        items-center
        justify-center
    `}
    
    header{
        ${tw`
            w-full flex items-center
        `}

        img{
            ${tw`
                w-full max-h-[296px]
            `}
        }
    }

    #img-logo{
        ${tw`
            mt-[-232px] mb-8
        `}
    }
`
