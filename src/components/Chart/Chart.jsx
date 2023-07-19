import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";
import Node from "./Node";
import "./Chart.scss";

const Chart = () => {
    const ds = {
        id: "n1",
        category: "R&D",
        title: "Lead Technical Engineer",
        grade: "JOB GRADE 6",
        children: [
            {
                id: "n2",
                category: "R&D",
                title: "Senior Support Engineer",
                grade: "JOB GRADE 5"
            },
            {
                id: "n3",
                category: "R&D",
                title: "Senior Technical Engineer",
                grade: "JOB GRADE 5",
                children: [
                    {
                        id: "n4",
                        category: "R&D",
                        title: "Technical Engineer",
                        grade: "JOB GRADE 4"
                    },
                ]
            }
        ]
    };

    return (
        <div className="career-path">
            <div className="career-path-title">Career Path</div>
            <OrganizationChart datasource={ds} chartClass="careerPath" NodeTemplate={Node} pan={true} zoom={true} collapsible={false} />
        </div>
    );
};

export default Chart;
