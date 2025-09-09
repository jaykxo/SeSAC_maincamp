/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    mutation createBoard ($mywriter: String, $mytitle: String, $mycontent: String) {\n        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n            number\n            message\n        }\n    } \n": typeof types.CreateBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String, \n        $mytitle: String, \n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": typeof types.CreateBoardDocument,
    "\nmutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n        _id\n        number\n        message\n    }\n}\n": typeof types.CreateProductDocument,
    "\n    query fetchBoard($qqq: Int){\n    fetchBoard(number: $qqq){\n        number\n        writer\n        title\n        contents\n    }\n    }\n": typeof types.FetchBoardDocument,
    "\n    mutation deleteBoard($mynumber: Int) {\n        deleteBoard(number: $mynumber) {\n            message\n        }\n    }\n": typeof types.DeleteBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": typeof types.CreateBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation updateBoard (\n        $mynumber: Int\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            updateBoard(number: $mynumber, writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": typeof types.UpdateBoardDocument,
};
const documents: Documents = {
    "\n    mutation createBoard ($mywriter: String, $mytitle: String, $mycontent: String) {\n        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n            number\n            message\n        }\n    } \n": types.CreateBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String, \n        $mytitle: String, \n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": types.CreateBoardDocument,
    "\nmutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n        _id\n        number\n        message\n    }\n}\n": types.CreateProductDocument,
    "\n    query fetchBoard($qqq: Int){\n    fetchBoard(number: $qqq){\n        number\n        writer\n        title\n        contents\n    }\n    }\n": types.FetchBoardDocument,
    "\n    mutation deleteBoard($mynumber: Int) {\n        deleteBoard(number: $mynumber) {\n            message\n        }\n    }\n": types.DeleteBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": types.CreateBoardDocument,
    "\n    # 변수의 타입 적는 곳\n    mutation updateBoard (\n        $mynumber: Int\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            updateBoard(number: $mynumber, writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard ($mywriter: String, $mytitle: String, $mycontent: String) {\n        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n            number\n            message\n        }\n    } \n"): (typeof documents)["\n    mutation createBoard ($mywriter: String, $mytitle: String, $mycontent: String) {\n        createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n            number\n            message\n        }\n    } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String, \n        $mytitle: String, \n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"): (typeof documents)["\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String, \n        $mytitle: String, \n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n        _id\n        number\n        message\n    }\n}\n"): (typeof documents)["\nmutation createProduct($seller: String, $createProductInput: CreateProductInput!) {\n    createProduct(seller: $seller, createProductInput: $createProductInput) {\n        _id\n        number\n        message\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard($qqq: Int){\n    fetchBoard(number: $qqq){\n        number\n        writer\n        title\n        contents\n    }\n    }\n"): (typeof documents)["\n    query fetchBoard($qqq: Int){\n    fetchBoard(number: $qqq){\n        number\n        writer\n        title\n        contents\n    }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteBoard($mynumber: Int) {\n        deleteBoard(number: $mynumber) {\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation deleteBoard($mynumber: Int) {\n        deleteBoard(number: $mynumber) {\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"): (typeof documents)["\n    # 변수의 타입 적는 곳\n    mutation createBoard (\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            createBoard(writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    # 변수의 타입 적는 곳\n    mutation updateBoard (\n        $mynumber: Int\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            updateBoard(number: $mynumber, writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"): (typeof documents)["\n    # 변수의 타입 적는 곳\n    mutation updateBoard (\n        $mynumber: Int\n        $mywriter: String\n        $mytitle: String\n        $mycontent: String\n        ) {\n            # 우리 실제로 전달할 변수 적는 곳\n            updateBoard(number: $mynumber, writer: $mywriter, title: $mytitle, contents: $mycontent) {\n                number\n                message\n        }\n    } \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;