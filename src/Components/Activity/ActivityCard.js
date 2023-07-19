import React from 'react';

const ActivityCard = (props) => {
    const { id, title, content, conclution, image } = props.activity
    return (
        <div className='border rounded-md shadow-sm'>
            <img className='rounded-r-md' src={image} alt="" />
            <div className='px-2'>
                <h2 className='font-medium pt-1'>{title}</h2>
                <p className='text-xs py-2'>{content.slice(0, 120)} ... </p>
            </div>

        </div>
    );
};

export default ActivityCard;