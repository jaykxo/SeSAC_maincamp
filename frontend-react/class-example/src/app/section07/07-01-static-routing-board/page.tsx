"use client"

import { useRouter } from "next/navigation"

export default function StaticRoutingBoardPage() {
    const router = useRouter()

    const onClickSubmit1 = () => {
        // 1. 게시글 등록하기
        // ...

        // 2. 등록된 페이지로 이동하기
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-01-static-routing-board-moved/1")
    }

    const onClickSubmit2 = () => {
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-01-static-routing-board-moved/2")
    }

    const onClickSubmit3 = () => {
        alert("게시글 등록에 성공했어요!")
        router.push("/section07/07-01-static-routing-board-moved/3")
    }

    return (
        <>
            <button onClick={onClickSubmit1}>1번 게시글 구독하기</button><br />
            <button onClick={onClickSubmit2}>2번 게시글 구독하기</button><br />
            <button onClick={onClickSubmit3}>3번 게시글 구독하기</button><br />
        </>
        
    )
}