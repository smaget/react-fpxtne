import React, { Component } from 'react';
import './Panel.css';
import PropTypes from 'prop-types';

class Panel extends Component {
  render() {
    //console.log(this);
    return (
      <div className="Panel">
        <h4 className="Panel-title">{this.props.title}</h4>
        <div className="Panel-content">{this.props.children}</div>
      </div>
    );
  }
}

Panel.propTypes = {
  title: PropTypes.string.isRequired
};

export default Panel;
