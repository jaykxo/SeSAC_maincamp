"use client"

import { gql, useMutation } from "@apollo/client"

const 나의그래프큐엘세팅 = gql`
    mutation createBoard ($mywriter: String, $mytitle: String, $mycontent: String) {
        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {
            number
            message
        }
    } 
`;

export default function GraphqlMutationPage() {

    const [게시글등록API요청함수] = useMutation(나의그래프큐엘세팅)

    const onClickSubmit = async () => {
        const result = await 게시글등록API요청함수({
            variables: {
                // variables => $와 같음
                mywriter: "노홍식",
                mytitle: "안녕하세유",
                mycontent: "노홍식이라구 해유",
            },
        });
        console.log(result);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    
}