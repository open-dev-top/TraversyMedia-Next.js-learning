import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import ArticleItem from "../../../components/ArticleItem"

const article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <>
            {/* <div>This is an article {article.id}</div> */}
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export default article
