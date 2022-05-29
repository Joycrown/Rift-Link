import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const styles = {
  root: {
    fontFamily:
    'Roboto',
    fontWeight: 300
  },
  header: {
    background: 'linear-gradient(90deg, #003087 0%, #007DB2 90.62%)',
    color: "white",
    // padding: "16px",
    fontSize: "1.5em"
  }
};

const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
};

export default MaterialTitlePanel;
