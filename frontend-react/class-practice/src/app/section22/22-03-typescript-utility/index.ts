export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 => 보통 수정하기에서 주로 사용됨
type aaa = Partial<IProfile>;

// 2. Required 타입
type bbb = Required<IProfile>;

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;

// 5. 유틸리티 타입 조합하기
type eee = Partial<Pick<IProfile, "name" | "age">>;

// 6. Record 타입
type fff = "명수" | "재석" | "하하"; // Union 타입
const child: fff = "명수"; // 명수, 재석, 하하만 가능
const child2: string = "홍철"; // 명수, 재석, 하하, 홍철, 형돈, 준하.. 다 가능

type ggg = Record<fff, IProfile>; // Record 타입

// 7. 객체의 key들로 Union 타입 만들기
type hhh = keyof IProfile;
const myprofile: hhh = "name";

// 8. type vs interface 차이   =>  핵심: interface 선언 병합
export interface IProfile {
  candy: number; // 선언 병합: 'name, age, school, hobby'에 'candy'가 추가됨
}

// 9. 학습내용 응용
const profile: Partial<IProfile> = {
  candy: 10, // Partial로 인해 candy만 있어도 허용됨
};


