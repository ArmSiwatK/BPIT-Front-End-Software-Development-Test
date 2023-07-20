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
        y: -100,
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
                    <h3>{nodeDatum.category}</h3>
                    <h3>{nodeDatum.name}</h3>
                    <h3>
                        JOB GRADE: {nodeDatum.grade}
                        <button
                            className="circle-button"
                        >
                            +
                        </button>
                    </h3>
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