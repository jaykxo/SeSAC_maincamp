"use client";

import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import _ from "lodash"

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    // 검색에서 refetch 할 때, keyword가 refetch에 이미 저장되어 있는 상태이므로 추가로 keyword 포함할 필요 없음
    refetch({ page: Number(event.target.id) });
  };

  const getDebounce = _.debounce((value) => {
    refetch({
      search: value,
      page: 1
    })
  }, 1000)

  const onChangeKeyword = (event) => {
    getDebounce(event.target.value)
  };

  
  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeKeyword} />
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.title}</span>
          <span>{el.writer}</span>
        </div>
      ))}
      {new Array(10).fill("명수").map((el, index) => (
        <button key={index + 1} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
