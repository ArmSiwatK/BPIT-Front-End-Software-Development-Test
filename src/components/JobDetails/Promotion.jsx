import React, { useState } from 'react';
import './Promotion.scss';

const Promotion = ({ promotionCriteria, employeeData }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const jobCriteriaKeys = Object.keys(promotionCriteria.jobCriteria);
    const truncatedJobCriteria = jobCriteriaKeys.slice(0, 4);

    return (
        <div className="promotion-table-container">
            <table className="promotion-table">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>หัวข้อประเมิน</th>
                        <th>เป้าหมาย</th>
                        <th>ปัจจุบัน</th>
                    </tr>
                </thead>
                {isCollapsed ? (
                    <tbody>
                        {truncatedJobCriteria.map((key, index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{key}</td>
                                <td>{promotionCriteria.jobCriteria[key]}</td>
                                <td>{employeeData.employeeStats[key]}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>
                                <div className="show-more" onClick={toggleCollapse}>...</div>
                            </td>
                            <td>
                                <div className="show-more" onClick={toggleCollapse}>...</div>
                            </td>
                            <td>
                                <div className="show-more" onClick={toggleCollapse}>...</div>
                            </td>
                            <td>
                                <div className="show-more" onClick={toggleCollapse}>...</div>
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {jobCriteriaKeys.map((key, index) => (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{key}</td>
                                <td>{promotionCriteria.jobCriteria[key]}</td>
                                <td>{employeeData.employeeStats[key]}</td>
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

export default Promotion;
