import styled, {css} from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {device} from '../../../../theme'

export const BlogQuote = styled.blockquote `
    position: relative;
    padding: 40px 25px 40px;
    background: ${themeGet("colors.themeColor")};
    text-align: center; 
    border-radius: 5px;
    ${device.large}{
        padding: 50px 31px 50px;
    }
    
    ${props => props.layout === 2 && css `
        min-height: 270px;
        ${device.large}{
            min-height: 335px;
        }
    `}
    ${props => props.layout === 1 && css `
        min-height: 270px;
        ${device.large}{
            min-height: 335px;
        }
    `}
    ${props => props.layout === 3 && css`
        padding: 0;
        min-height: 78px;
        display: flex;
        justify-content: center;
        align-items: center;
        ${device.large}{
            padding: 0;
        }
    `}
    .icon{
        width: 30px;
        height: 30px;
    }
    h3{
        font-size: 18px;
        line-height: 1.5;
        margin-bottom: 20px;
        ${device.large}{
            font-size: 22px;
            margin-bottom: 39px;
        }
    }
    footer{
        font-size: 18px;
        color: #333;
        margin-bottom: 0;
    }
`;