"use client"

import { supabase } from "@/commons/libraries/17-01-supabase";
export default function SupabasePage() {
  const onClickSubmit = async () => {
    const result = await supabase.from("board").insert({
      writer: "명수",
      title: "인천이",
      content: "천안보다 낫다",
    });
  };
  const onClickFetch = async () => {
    await supabase.from("board").select("*");
  };

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <br />
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
