import React from "react"

function BlogPost() {
    return (
        <main>
            <h1 className="title">Title: {props.title}</h1>
            <h2 className="subTitle">Sub Title: {props.subTitle}</h2>
            <h2 className="author">Author: {props.author}</h2>
            <h2 className="date">Date: {props.date}</h2>

        </main>
    )
}

export default BlogPost