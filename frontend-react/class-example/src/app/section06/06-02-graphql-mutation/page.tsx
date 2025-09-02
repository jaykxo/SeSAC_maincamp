"use client"

import { gql, useMutation } from "@apollo/client"

const 나의그래프큐엘세팅 = gql`
    mutation{
        createBoard(
            writer: "MYUNG SOO",
            title: "incheoni",
            contents: " cheonanboda natda"
        ) {
            number
            message
        }
    } 
`;

export default function GraphqlMutationPage() {

    const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅)

    const onClickSubmit = async () => {
        const result = await 게시글등록API요청함수()
        console.log(result);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    
}