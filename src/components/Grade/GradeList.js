import React from 'react'
import GradeItem from './GradeItem.js'

import './GradeList.scss';

const GradeList = () => {
    return (
        <ul className="gradeList">
            <GradeItem title="Example 1" />
            <GradeItem title="Example 2" />
        </ul>
    )
}

export default GradeList