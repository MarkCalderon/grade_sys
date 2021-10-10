import React from 'react'
import './GradeItem.scss'

const GradeItem = ({title}) => {
    return (
        <li className="gradeItem">{title}</li>
    )
}

export default GradeItem