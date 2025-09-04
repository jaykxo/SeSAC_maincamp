"use client"

import { gql, useMutation, useQuery } from "@apollo/client"
import { MouseEvent } from "react"

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`
const DELETE_BOARD = gql`
    mutation deleteBoard($mynumber: Int) {
        deleteBoard(number: $mynumber) {
            message
        }
    }
`
interface IFetchBoard {
    number: number;
    writer: string;
    title: string;
}

export default function MapBoardsDeletePage() {
    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    console.log(data?.fetchBoards) // [{ number: 1, writer: "명수", ... }, {...}, ...]

    const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
        await deleteBoard({
            variables: {
                // @ts-ignore => 바로 아랫줄 타입 무시할 때 사용
                mynumber: Number(event.currentTarget.id), // currentTarget vs target => 이벤트버블링 수업에서 진행
            },
            refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    return (
        <div>
            {data?.fetchBoards.map((el: IFetchBoard) => {
                // 1. key와 index
                //   => index는 게시글 삭제하더라도 다음 게시글이 올라오면서 기존 index와 동일한 값을 가짐
                //   => 따라서 유일하지 않음

                // 2. Fragment
                //   => 프래그먼트로 감싸는 경우, div처럼 영역을 생성하지 않음
                //   => 프래그먼트 사용법 <></>, <fragment></fragment>
                //   => 프래그먼트에 key 입력하려면? <fragment key={1}</fragment>
                return (
                    <div key={el.number}>
                        <span>
                            <input type="checkbox" />
                        </span>
                        <span>{el.number}</span>
                        <span>{el.title}</span>
                        <span>{el.writer}</span>
                        <span>
                            <button id={String(el.number)} onClick={onClickDelete}>
                                삭제
                            </button>
                        </span>
                    </div>
                    
                )
            })}
        </div>
    )
}