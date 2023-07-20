import React, { useState } from 'react';
import "./StandardPromotion.scss";

const StandardPromotion = ({ jobData }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const jobCriteriaKeys = Object.keys(jobData.jobCriteria);
    const truncatedJobCriteria = jobCriteriaKeys.slice(0, 4);

    return (
        <div className="standard-promotion">
            <table className="job-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Assessment</th>
                        <th>Goal</th>
                    </tr>
                </thead>
                {isCollapsed ? (
                    <tbody>
                        {truncatedJobCriteria.map((key, index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{key}</td>
                                <td>{jobData.jobCriteria[key]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td><div className="show-more" onClick={toggleCollapse}>...</div></td>
                            <td><div className="show-more" onClick={toggleCollapse}>...</div></td>
                            <td><div className="show-more" onClick={toggleCollapse}>...</div></td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {jobCriteriaKeys.map((key, index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{key}</td>
                                <td>{jobData.jobCriteria[key]}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
            {!isCollapsed && (
                <button className="show-less" onClick={toggleCollapse}>
                    Show Less
                </button>
            )}
        </div>
    );
};

export default StandardPromotion;
