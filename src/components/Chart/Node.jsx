import React from "react";
import PropTypes from "prop-types";
import "./Node.scss";

const propTypes = {
    nodeData: PropTypes.object.isRequired
};

const Node = ({ nodeData }) => {
    return (
        <div>
            <div className="category">{nodeData.category}</div>
            <div className="title">{nodeData.title}</div>
            <div className="grade">{nodeData.grade}</div>
        </div>
    );
};

Node.propTypes = propTypes;

export default Node;
