import React from 'react';

const AllCourse = async () => {
    const res = await fetch(`https://skillsphere-murex.vercel.app/course.json`)
    const data = await res.json()
    const topRated = data
    return (
        <div>

        </div>
    );
};

export default AllCourse;