import styled from "styled-components";

export const Container = styled.div`
//Theme 1
    //Backgrounds:
    --Very-dark-desaturated-blue-main-bg: hsl(222, 26%, 31%);
    --Very-dark-desaturated-blue-toggle-bg-keypad-bg: hsl(223, 31%, 20%);
    --Very-dark-desaturated-blue-screen-bg: hsl(224, 36%, 15%);
    //Keys:
    --Desaturated-dark-blue-key-bg: hsl(225, 21%, 49%);
    --Desaturated-dark-blue-key-shadow: hsl(224, 28%, 35%);
    --Red-key-bg-toggle: hsl(6, 63%, 50%);
    --Dark-red-key-shadow: hsl(6, 70%, 34%);
    --Light-grayish-orange-key-bg: hsl(30, 25%, 89%);
    --Grayish-orange-key-shadow: hsl(28, 16%, 65%);
    //Text:
    --Very-dark-grayish-blue: hsl(221, 14%, 31%);
    --White: hsl(0, 0%, 100%);
//Theme 2
    //Backgrounds:
    --Light-gray-main-bg: hsl(0, 0%, 90%);
    --Grayish-red-toggle-bg-keypad-bg: hsl(0, 5%, 81%);
    --Very-light-gray-screen-bg: hsl(0, 0%, 93%);
    //Keys:
    --Dark-moderate-cyan-key-bg: hsl(185, 42%, 37%);
    --Very-dark-cyan-key-shadow: hsl(185, 58%, 25%);
    --Orange-key-bg-toggle: hsl(25, 98%, 40%);
    --Dark-orange-key-shadow: hsl(25, 99%, 27%);
    --Light-grayish-yellow-key-bg: hsl(45, 7%, 89%);
    --Dark-grayish-orange-key-shadow: hsl(35, 11%, 61%);
    //Text:
    --Very-dark-grayish-yellow: hsl(60, 10%, 19%);
    --White-text: hsl(0, 0%, 100%);
//Theme 3
    //Backgrounds:
    --Very-dark-violet-main-bg: hsl(268, 75%, 9%);
    --Very-dark-violet-toggle-bg-keypad-bg-screen-bg: hsl(268, 71%, 12%);
    //Keys:
    --Dark-violet-key-bg: hsl(281, 89%, 26%);
    --Vivid-magenta-key-shadow: hsl(285, 91%, 52%);
    --Pure-cyan-key-bg-toggle: hsl(176, 100%, 44%);
    --Soft-cyan-key-shadow: hsl(177, 92%, 70%);
    --Very-dark-violet-key-bg: hsl(268, 47%, 21%);
    --Dark-magenta-key-shadow: hsl(290, 70%, 36%);
    //Text:
    --Light-yellow: hsl(52, 100%, 62%);
    --Very-dark-blue: hsl(198, 20%, 13%);
    --White-text: hsl(0, 0%, 100%);
    *{
        margin:0;
    }
    font-size: 32px;
    font-family: 'League Spartan', sans-serif;
    --bold: 700;
    display:flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme === 'default' ? 'var(--Very-dark-desaturated-blue-main-bg)' : props.theme === 'light' ? 'var(--Light-gray-main-bg)' : 'var(--Very-dark-violet-main-bg)'};
    .default {
        background-color: var(--Very-dark-desaturated-blue-main-bg)
    }
`