import React from 'react';

const BlogCard = (props) => {
    const { id, title, content, conclution, image, authorImg, author, jobTitle } = props.blog
    return (
        <div>
            <img className='rounded-r-md' src={image} alt="" />
            <div className='px-2'>
                <h2 className='font-medium pt-1'>{title}</h2>
                <p className='text-xs py-2'>{content.slice(0, 120)} ... </p>
            </div>
            <div className='flex items-start gap-3'>
                <img className='w-2/12' src={authorImg} alt="" />
                <div>
                    <p className='font-medium'>{author}</p>
                    <p className='text-xs'>{jobTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;