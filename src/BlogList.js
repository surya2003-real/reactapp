const BlogList = (props) => {
    const  blogs= props.blogs;
    const handleDelete = props.handleDelete;

    return (
        <div className="BlogList">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;