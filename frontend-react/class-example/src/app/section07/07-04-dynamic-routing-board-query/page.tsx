"use client"

import { useRouter } from "next/navigation"

export default function StaticRoutingBoardPage() {
    const router = useRouter()

    const onClickSubmit1 = () => {
        // 1. 게시글 등록하기
        // ...

        // 2. 등록된 페이지로 이동하기
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-04-dynamic-routing-board-query-moved/456")
    }

    const onClickSubmit2 = () => {
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-04-dynamic-routing-board-query-moved/457")
    }

    const onClickSubmit3 = () => {
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-04-dynamic-routing-board-query-moved/458")
    }

    return (
        <>
            <button onClick={onClickSubmit1}>456번 게시글 구독하기</button><br />
            <button onClick={onClickSubmit2}>457번 게시글 구독하기</button><br />
            <button onClick={onClickSubmit3}>458번 게시글 구독하기</button><br />
        </>
        
    )
}