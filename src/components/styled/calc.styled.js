import styled from 'styled-components';

export const Vstack = styled.div`
    display: flex;
    flex-direction: column;
`
export const Hstack = styled.div`
    display: flex;
    flex-direction: row;
`
export const StyledCalc = styled(Vstack)`
    width: 460px;
    min-height: auto;
    padding: 20px;
    margin: 0 auto;
    transition: background-color 0.3s ease;
    @media screen and (max-width:600px) {
        width: 88%;
        margin: 0;
    }
`
export const ThemeSelection = styled(Hstack)`
    width: auto;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    .rightsider{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    .onetwothree{
        display: flex;
        width: 24%;
        justify-content: space-between;
        margin: 5px 10px;
        p{
            font-size: 0.45em;
        }
    }
    .theme_slider{
        justify-content: flex-end;
        align-items: center;
    }
    p{
        font-size: 1em;
        color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Very-dark-grayish-yellow)' : 'var(--Light-yellow)'};
    }
    label{
        font-size: 0.35em;
        text-transform: uppercase;
        letter-spacing: .1em;
        color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Very-dark-grayish-yellow)' : 'var(--Light-yellow)'};
        margin: 0 10px;
    }
    input[type="range"]{
        -webkit-appearance: none;
        appearance: none;
        width: 29%;
        height: 8px;
        border-radius: 40px;
        border: none;
        padding: 8px 5px;
        background: ${props => props.theme === 'default'? 'var(--Very-dark-desaturated-blue-toggle-bg-keypad-bg)' : props.theme === 'light' ? 'var(--Grayish-red-toggle-bg-keypad-bg)' : 'var(--Very-dark-violet-toggle-bg-keypad-bg-screen-bg)'};
        cursor: pointer;
        transition: thumb 0.8s ease;
    }
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${props => props.theme === 'default'? 'var(--Red-key-bg-toggle)' : props.theme === 'light' ? 'var(--Orange-key-bg-toggle)' : 'var(--Pure-cyan-key-bg-toggle)'};
        cursor: grab;
        transition: all 0.8s ease;
        &:hover{
            filter: brightness(1.4);
        }
    }
    @media screen and (max-width:600px) {
        margin-bottom: 0;
    }
`
export const Displayscreen = styled.div`
    display: flex;
    text-align: end;
    white-space: nowrap;
    text-overflow: clip;
    width:91.5%;
    height: auto;
    font-size: 1.45em;
    line-height: 1.5em;
    color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Very-dark-grayish-yellow)' : 'var(--Light-yellow)'};
    background-color: ${props => props.theme === 'default'? 'var(--Very-dark-desaturated-blue-screen-bg)' : props.theme === 'light' ? 'var(--Very-light-gray-screen-bg)' : 'var(--Very-dark-violet-toggle-bg-keypad-bg-screen-bg)'};
    border-radius: 10px;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 20px;
    margin: 5px auto 20px;
    ::-webkit-scrollbar {
        display: none;
    }
    p{
        overflow: scroll;
    }
    @media screen and (max-width:600px) {
        width: 88%;
        font-size: 1.2em;
        margin: 30px auto 20px;
    }
`
export const AreaKeypads = styled.div`
    display: grid;
    width: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
        "seven eight nine del"
        "four five six plus"
        "one two three minus"
        "node nol divide multi"
        "reseting reseting equal equal";
    grid-gap: 20px;
    border-radius: 10px;
    background-color: ${props => props.theme === 'default'? 'var(--Very-dark-desaturated-blue-toggle-bg-keypad-bg)' : props.theme === 'light' ? 'var(--Grayish-red-toggle-bg-keypad-bg)' : 'var(--Very-dark-violet-toggle-bg-keypad-bg-screen-bg)'};
    padding: 25px;
    @media screen and (max-width:600px) {
        grid-gap: 15px;
    }
`
export const Keypads = styled.button`
    display: flex;
    width: 100%;
    height: 55px;
    font-size: .8em;
    font-weight: 700;
    font-family: 'League Spartan', sans-serif;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    color: ${props => props.theme === 'default'? 'var(--Very-dark-grayish-blue)' : props.theme === 'light' ? 'var(--Very-dark-grayish-yellow)' : 'var(--Light-yellow)'};
    background-color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Light-grayish-yellow-key-bg)' : 'var(--Very-dark-violet-key-bg)'};
    border-bottom: 3px solid ${props => props.theme === 'default'? 'var(--Grayish-orange-key-shadow)' : props.theme === 'light' ? 'var(--Dark-grayish-orange-key-shadow)' : 'var(--Dark-magenta-key-shadow)'};
    padding: 5px 0 0;
    &:hover{
        filter: brightness(1.4);
    }
    &:active{
        transform: scale(0.97);
    }
`
export const Number1 = styled(Keypads)`
    grid-area: one;
`
export const Number2 = styled(Keypads)`
    grid-area: two;
`
export const Number3 = styled(Keypads)`
    grid-area: three;
`
export const Number4 = styled(Keypads)`
    grid-area: four;
`
export const Number5 = styled(Keypads)`
    grid-area: five;
`
export const Number6 = styled(Keypads)`
    grid-area: six;
`
export const Number7 = styled(Keypads)`
    grid-area: seven;
`
export const Number8 = styled(Keypads)`
    grid-area: eight;
`
export const Number9 = styled(Keypads)`
    grid-area: nine;
`
export const Number0 = styled(Keypads)`
    grid-area: nol;
`
export const Dot = styled(Keypads)`
    grid-area: node;
`
export const Plus = styled(Keypads)`
    grid-area: plus;
`
export const Minus = styled(Keypads)`
    grid-area: minus;
    padding: 0;
`
export const Multiply = styled(Keypads)`
    grid-area: multi;
    padding: 0;
`
export const Divide = styled(Keypads)`
    grid-area: divide;
`
export const Reset = styled(Keypads)`
    grid-area: reseting;
    font-size: .6em;
    color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Light-gray-main-bg)' : 'var(--White-text)'};
    background-color: ${props => props.theme === 'default'? 'var(--Desaturated-dark-blue-key-bg)' : props.theme === 'light' ? 'var(--Dark-moderate-cyan-key-bg)' : 'var(--Dark-violet-key-bg)'};
    border-bottom: 3px solid ${props => props.theme === 'default'? 'var(--Very-dark-desaturated-blue-main-bg)' : props.theme === 'light' ? 'var(--Very-dark-cyan-key-shadow)' : 'var(--Vivid-magenta-key-shadow)'};
`
export const Equal = styled(Keypads)`
    grid-area: equal;
    color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Light-gray-main-bg)' : 'var(--Very-dark-blue)'};
    background-color: ${props => props.theme === 'default'? 'var(--Red-key-bg-toggle)' : props.theme === 'light' ? 'var(--Orange-key-bg-toggle)' : 'var(--Pure-cyan-key-bg-toggle)'};
    border-bottom: 3px solid ${props => props.theme === 'default'? 'var(--Dark-red-key-shadow)' : props.theme === 'light' ? 'var(--Dark-orange-key-shadow)' : 'var(--Soft-cyan-key-shadow)'};
`
export const Delete = styled(Keypads)`
    grid-area: del;
    font-size: .6em;
    color: ${props => props.theme === 'default'? 'var(--White)' : props.theme === 'light' ? 'var(--Light-gray-main-bg)' : 'var(--White-text)'};
    background-color: ${props => props.theme === 'default'? 'var(--Desaturated-dark-blue-key-bg)' : props.theme === 'light' ? 'var(--Dark-moderate-cyan-key-bg)' : 'var(--Dark-violet-key-bg)'};
    border-bottom: 3px solid ${props => props.theme === 'default'? 'var(--Very-dark-desaturated-blue-main-bg)' : props.theme === 'light' ? 'var(--Very-dark-cyan-key-shadow)' : 'var(--Vivid-magenta-key-shadow)'};
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 0 auto 10px;
    text-align: center;
    justify-content: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 10px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:5px 0;
    a{
        ${props => props.theme === 'default'? 'var(--Light-grayish-orange-key-bg)' : props.theme === 'light' ? 'var(--Orange-key-bg-toggle)' : 'var(--Pure-cyan-key-bg-toggle)'};
    }
    p{
        font-size: .8rem;
        color: ${props => props.theme === 'default'? 'var(--Red-key-bg-toggle)' : props.theme === 'light' ? 'var(--Dark-orange-key-shadow)' : 'var(--Soft-cyan-key-shadow)'};
    }
`