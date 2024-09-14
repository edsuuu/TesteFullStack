import styled from 'styled-components';

export const ModalsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0505054d;

    .main-modal{
        width: 400px;
        height: 400px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        color: black;
    }
    .title-main{
        background-color:#809caa;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        color: white;
        button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            &:active{
                transform: scale(0.95);
            }
        }
    }

    .InfoModal{
        div:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 1.1rem;

        }
        div:nth-child(2){
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            padding: 10px 20px;
            gap: 3px;
        }
    }

    .search-pesquisa{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        input {
            padding: 10px;
            font-size: 1rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            &:focus {
                border: 1px solid #5da0ad;
                outline: none;
            }
        }

        button {
            font-weight: bold;
            border-radius: 6px;
            border: none;
            padding: 8px 12px;
            background-color: #456677;
            color: white;
            cursor: pointer;
            &:active {
                transform: scale(0.95);
            }
        }
    }

`;