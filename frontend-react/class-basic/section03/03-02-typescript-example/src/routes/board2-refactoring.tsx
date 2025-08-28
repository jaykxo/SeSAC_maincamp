import { ChangeEvent, use, useState } from "react"

const Board = () => {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    
    const [isActive, setIsActive] = useState(false)

    // 내가 처음에 조건문 대신 만든 코드
    // const isActive = writer.trim() !== "" && title.trim() !== "" && content.trim() !== ""

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value)

        if(event.target.value && title && content ) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)

        if(writer && event.target.value && content ) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)

        if(writer && title && event.target.value) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    // 만약 버튼을 클릭했다면...?
    // const onClickButton = (event: MouseEvent<HTMLButtonElement>) => {

    // }

    // <button style={{}}> 중괄호가 두 개인 이유: 객체를 넣는 것이므로
    // const 버튼스타일 = { 
    //     backgroundColor: "yellow" 
    // }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter}/><br />
            제목: <input type="text" onChange={onChangeTitle}/><br />
            내용: <input type="text" onChange={onChangeContent}/><br />
            <button style={{ backgroundColor: isActive === true ? "yellow" : "gray" }}>등록하기</button>
        </>
    )
}

export default Board