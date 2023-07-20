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
        y: -50,
    };
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
                <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
                    <h3 style={{ textAlign: "center" }}>{nodeDatum.category}</h3>
                    <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
                    <h3 style={{ textAlign: "center" }}>JOB GRADE: {nodeDatum.grade}</h3>
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
                depthFactor={200}
                renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                }
            />
        </div>
    );
}

export default Chart;