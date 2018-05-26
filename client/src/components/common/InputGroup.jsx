import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class InputGroup extends Component {
  render() {
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={this.props.icon} />
          </span>
        </div>
        <input
          className={classnames("form-control form-control-lg", {
            "is-invalid": this.props.error
          })}
          placeholder={this.props.placeholder}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        {this.props.error && (
          <div className="invalid-feedback">{this.props.error}</div>
        )}
      </div>
    );
  }
}
InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
InputGroup.defaultProps = {
  type: "text"
};
export default InputGroup;
