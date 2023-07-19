import React, { useEffect, useState } from 'react';
import ActivityCard from './ActivityCard';

const Activity = () => {
    const [activity, setActivity] = useState([])

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])
    return (
        <div className='mx-14'>
            <div className='bg-white mt-4 px-5 py-3 rounded-md shadow-md'>
                <h2 className='text-xl font-semibold pb-4'>Activity</h2>
                <div className='flex gap-4 pb-4'>
                    {
                        activity.slice(0, 4).map(activity => <ActivityCard
                            activity={activity}
                        ></ActivityCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Activity;