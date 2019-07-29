import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';


const AddEducation = ({ addEducation, history }) => {

    const [formdata, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formdata;
    const onChange = e => setFormData({
        ...formdata,
        [e.target.name]: e.target.value
    })
    return (
        <React.Fragment>
            <h1 className="large text-primary">
                Add Your Education
      </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school, bootcamp, etc that
                you have attended
      </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addEducation(formdata, history)
            }}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or Bootcamp"
                        name="school"
                        required
                        value={school} onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        required
                        value={degree} onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Field Of Study" name="fieldofstudy"
                        value={fieldofstudy} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from"
                        value={from} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current} checked={current}
                            onChange={e => {
                                setFormData({ ...formdata, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                        />{' '} Current School or Bootcamp
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to"
                        value={to} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
        </React.Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation))
