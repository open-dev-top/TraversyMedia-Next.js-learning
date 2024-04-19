import React from "react"
import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({ article }) => {
    return (
        <Link legacyBehavior href="/article/[id]" as={`article/${article.id}`}>
            <a id="link" className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
