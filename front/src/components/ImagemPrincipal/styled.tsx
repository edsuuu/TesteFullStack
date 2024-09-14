import styled from 'styled-components';

export const ContainerImg = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 400px;
            height: 635px;

        }

    .linha-img{
        width: 100%;
        border: 1.5px solid #5da0ad;
    }


    .buttons-trocar-produts{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2px 20px;

        button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background-color: #809caa;
            border: none;
            color: white;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;

            &:active {
                transform: scale(0.96)
            }
        }

        button:nth-child(1){

        }
        button:nth-child(2){

        }
    }
`;
