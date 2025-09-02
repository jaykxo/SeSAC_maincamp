"use client"

import { gql, useMutation } from "@apollo/client"

const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
        _id
        number
        message
    }
}
`;

export default function GraphqlMutationPage() {

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: "박연진",
                createProductInput: {
                    name: "여권이랑 가고싶은 나라",
                    detail: "내가 방금 푼돈으로 쟤 하늘이 됐어",
                    price: 2990000
                }
            }
        });
        console.log(result);
    };

    return <button onClick={onClickSubmit}>상품 등록하기</button>
}