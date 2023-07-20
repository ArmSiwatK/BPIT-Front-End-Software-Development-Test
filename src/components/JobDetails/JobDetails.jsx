import React from 'react';
import Promotion from './Promotion';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './JobDetails.scss';

const countMatches = (jobCriteria, employeeData) => {
    let matchCount = 0;
    for (const key in jobCriteria) {
        if (key in employeeData && jobCriteria[key] === employeeData[key]) {
            matchCount++;
        }
    }
    return matchCount;
};

const JobDetails = ({ promotionCriteria, fastTrackCriteria, employeeData }) => {
    const matchCountPromotion = countMatches(promotionCriteria.jobCriteria, employeeData.employeeStats);
    const matchCountFastTrack = countMatches(fastTrackCriteria.jobCriteria, employeeData.employeeStats);

    return (
        <div className="promotion-background">
            <div className="promotion-container-all">
                <div className="promotion-header">
                    {promotionCriteria.jobName} — [Job Grade: {promotionCriteria.jobGrade}] — [{promotionCriteria.jobCategory}]
                </div>
                <div className="promotion-container">
                    <div className="promotion-list">
                        <div className="promotion-name">เกณฑ์การเลื่อนตำแหน่งแบบทั่วไป</div>
                        <CircularProgressbarWithChildren
                            value={matchCountPromotion}
                            maxValue={Object.keys(promotionCriteria.jobCriteria).length}
                            strokeWidth={12}
                            text={`${(matchCountPromotion / Object.keys(promotionCriteria.jobCriteria).length) * 100}%`}
                        >
                            <div className="promotion-fraction">
                                ( {matchCountPromotion} / {Object.keys(promotionCriteria.jobCriteria).length} )
                            </div>
                        </CircularProgressbarWithChildren>
                        <Promotion promotionCriteria={promotionCriteria} employeeData={employeeData} />
                    </div>
                    <div className="promotion-list">
                        <div className="promotion-name">เกณฑ์การเลื่อนตำแหน่งแบบ Fast Track</div>
                        <CircularProgressbarWithChildren
                            value={matchCountFastTrack}
                            maxValue={Object.keys(fastTrackCriteria.jobCriteria).length}
                            strokeWidth={12}
                            text={`${(matchCountFastTrack / Object.keys(fastTrackCriteria.jobCriteria).length) * 100}%`}
                        >
                            <div className="promotion-fraction">
                                ( {matchCountFastTrack} / {Object.keys(fastTrackCriteria.jobCriteria).length} )
                            </div>
                        </CircularProgressbarWithChildren>
                        <Promotion promotionCriteria={fastTrackCriteria} employeeData={employeeData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
