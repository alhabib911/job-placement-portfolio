import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='mx-14 mt-4 bg-white px-5 py-3 rounded-md'>
            <h2 className='text-xl font-semibold pb-4'>Blog</h2>
            <div className='flex gap-4 pb-4'>
                {
                    blog.slice (0, 4).map(blog => <BlogCard
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;