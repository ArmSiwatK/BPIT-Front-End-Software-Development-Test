import React from 'react';
import './JobDetails.scss';
import StandardPromotion from './StandardPromotion';

const JobDetails = ({ jobData }) => {
    return (
        <div className="job-details">
            <div className="job-header">
                {jobData.jobName} [Job Grade: {jobData.jobGrade}] [{jobData.jobCategory}]
            </div>
            <StandardPromotion jobData={jobData} />
        </div>
    );
};

export default JobDetails;
