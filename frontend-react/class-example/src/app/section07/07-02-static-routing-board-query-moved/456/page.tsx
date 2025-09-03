"use client"

import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query {
    fetchBoard(number: 456){
        number
        writer
        title
        contents
    }
    }
`

export default function StaticRoutingBoardMovedPage() {
    const { data } = useQuery(FETCH_BOARD);

    return (
        <>
            <div>456번 게시글 상세페이지 입니다.</div>
            <div>
                작성자: {data !== undefined ? data.fetchBoard.writer : "기다료.."}
                </div>
            <div>제목: {data &&  data.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}