"use client"

import { gql, useMutation, useQuery } from "@apollo/client"
import Checkbox from "./checkbox"

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

export default function MapBoardsDeletePage() {
    const { data } = useQuery(FETCH_BOARDS)

    // const onClickParent = (event) => {
        
    //     // event.target; => 내가 클릭한 태그
    //     // event.currentTarget; => 내 클릭이 버블링되어 부모거 onClick 실행되었을 때의 그 태그
    //     alert(`이 글의 작성자는 ${event.currentTarget.id} 입니다.`)
    // }

    const onClick1 = (event) => {
        // event.stopPropagaton();
        alert("1번 클릭");
    }
    
    const onClick4 = (event) => {
        alert("4번 클릭");
    }
    const onClick5 = (event) => {
        alert("5번 클릭");
    }

    return (
        <div>
            {data?.fetchBoards.map((el, index) => {
                return (
                    <div key={el.number} id={el.writer} onClick={onClick1}>
                        <Checkbox />
                        <span onClick={onClick4}>{el.number}</span>
                        <span onClick={onClick5}>{el.title}</span>
                        <span>{el.writer}</span>
                    </div>
                )
            })}
        </div>
    )
}