import React from 'react';
import Tree from 'react-d3-tree';
import { NavLink } from "react-router-dom";
import { CenterTree } from "./CenterTree";
import CareerPath from "../../assets/CareerPath.json";
import "./Chart.scss";

const Chart = () => {
    const [translate, containerRef] = CenterTree();
    const foreignObjectProps = {
        width: 300,
        height: 200,
        x: -150,
        y: -75,
    };
    const depthFactor = 250;
    const siblingSeparation = {
        nonSiblings: 3,
        siblings: 3
    }

    const renderForeignObjectNode = ({ nodeDatum, foreignObjectProps }) => {
        const applyGradeStyle = (grade) => {
            switch (grade) {
                case "1":
                    return {
                        backgroundColor: '#444',
                        color: 'white',
                    };
                case "2":
                    return {
                        backgroundColor: '#666',
                        color: 'white',
                    };
                case "3":
                    return {
                        backgroundColor: '#888',
                        color: 'white',
                    };
                case "4":
                    return {
                        backgroundColor: '#aaa',
                        color: 'black',
                    };
                case "5":
                    return {
                        backgroundColor: '#ccc',
                        color: 'black',
                    };
                case "6":
                    return {
                        backgroundColor: '#eee',
                        color: 'black',
                    };
                default:
                    return {
                        backgroundColor: '#eee',
                        color: 'black',
                    };
            }
        };

        const nodeCategoryStyle = applyGradeStyle(nodeDatum.grade);

        return (
            <g>
                <foreignObject {...foreignObjectProps}>
                    <div className="chart-node">
                        <div className="node-category" style={nodeCategoryStyle}>
                            {nodeDatum.category}
                        </div>
                        <div className="node-name">{nodeDatum.name}</div>
                        <div className="node-grade-container">
                            <div className="node-grade">JOB GRADE: {nodeDatum.grade}</div>
                            <div className="circle-button">
                                <NavLink to="/promotion" className="plus-symbol">+</NavLink>
                            </div>
                        </div>
                    </div>
                </foreignObject>
            </g>
        );
    };


    return (
        <div className="tree-wrapper" ref={containerRef}>
            <div className="tree-backgrounds"></div>
            <div className="job-grades">
                <div className="grade-6">Job Grade 6</div>
                <div className="grade-5">Job Grade 5</div>
                <div className="grade-4">Job Grade 4</div>
                <div className="grade-3">Job Grade 3</div>
                <div className="grade-2">Job Grade 2</div>
                <div className="grade-1">Job Grade 1</div>
            </div>
            <Tree
                data={CareerPath}
                translate={translate}
                collapsible={false}
                orientation="vertical"
                pathFunc="step"
                separation={siblingSeparation}
                depthFactor={depthFactor}
                renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                }
            />
        </div>
    );
}

export default Chart;