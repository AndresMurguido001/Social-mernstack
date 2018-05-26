import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    //EXP items
    const expItems = experience.map(exp => (
      <li key={exp._id} className="list-group-item">
        {exp.company}
        <p>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>{exp.title}</strong>
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              Location: <strong>{exp.location}</strong>
            </span>
          )}
        </p>
        <p>
          {exp.description === "" ? null : (
            <span>
              Description: <strong>{exp.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));
    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        {edu.school}
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>{edu.degree}</strong>
        </p>
        <p>
          <strong>{edu.fieldofstudy}</strong>
        </p>
        <p>
          {edu.description === "" ? null : (
            <span>
              Description: <strong>{edu.description}</strong>
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          {expItems.length > 0 ? (
            <ul className="list-group">{expItems}</ul>
          ) : (
            <p className="text-center">No Experiences listed</p>
          )}
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Experiences listed</p>
          )}
        </div>
      </div>
    );
  }
}
ProfileCreds.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};
export default ProfileCreds;
