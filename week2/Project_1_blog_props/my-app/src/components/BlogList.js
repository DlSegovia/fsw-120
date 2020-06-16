import React from "react"
import array from "./BlogData"
import BlogPost from "./BlogPost"

function BlogList() {
    return (
        <main>{array.map(blogPost => {
            console.log(blogPost.price)
            return (
                <BlogPost className="card"
                    key={blogPost.title}
                    subTitle={blogPost.subTitle}
                    // class={blogPost.imageclass}
                    title={blogPost.title}
                    date={blogPost.date}
                    author={blogPost.author}
                />
            )
        })}</main>
    )
}
export default BlogList