import React from 'react';
import Tree from 'react-d3-tree';
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

    const renderForeignObjectNode = ({
        nodeDatum,
        foreignObjectProps
    }) => (
        <g>
            <foreignObject {...foreignObjectProps}>
                <div className="chart-node">
                    <div className="node-category">{nodeDatum.category}</div>
                    <div className="node-name">{nodeDatum.name}</div>
                    <div className="node-grade-container">
                        <div className="node-grade">JOB GRADE: {nodeDatum.grade}</div>
                        <div className="circle-button"><span className="plus-symbol">+</span></div>
                    </div>
                </div>
            </foreignObject>
        </g>
    );

    return (
        <div className="tree-wrapper" ref={containerRef}>
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