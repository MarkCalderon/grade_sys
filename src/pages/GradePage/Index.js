import React from 'react'

import GradeList from '../../components/Grade/GradeList'; 

import './Index.scss';

const GradePage = () => {
    return (
        <main className="gradePage">
            <p>Grade</p>
            <GradeList />
        </main>
    );
}

export default GradePage
