"use client"

import BoardsWriteAdvanced from "@/components/09-03-boards-write-advanced"
import { gql, useQuery } from "@apollo/client"
import { useParams } from "next/navigation"

const FETCH_BOARD = gql`
    query fetchBoard($qqq: Int){
    fetchBoard(number: $qqq){
        number
        writer
        title
        contents
    }
    }
`

export default function BoardComponentEditPage() {
    const 내주소변수 = useParams()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            qqq: Number(내주소변수.number),
        },
    });

    return(
        // <>
        //     <h1>수정페이지</h1> 
        //     제목: <input type="text" />
        //     내용: <input type="text" />
        //     <button>수정하기</button>
        // </>
        <BoardsWriteAdvanced isEdit={true} data={data}/>
    )
}