import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../../actions/profile';


const Experience = ({ experience, deleteExperience }) => {

    const experiences = experience.map(experience => (
        <tr key={experience._id} >
            <td>{experience.company}</td>
            <td className="hide-sm">{experience.title}</td>
            <td>
                <Moment format="YYYY/MM/DD">{experience.from}</Moment> - {' '} {
                    experience.to === null ? (' Now') : (<Moment format="YYYY/MM/DD">{experience.to}</Moment>)
                }
            </td>
            <td><button onClick={() => deleteExperience(experience._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    ))
    return (
        <React.Fragment>
            <h2 className="my-2">Experience credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th className='hide-sm'>Title</th>
                        <th className='hide-sm'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{
                    experiences
                }</tbody>
            </table>
        </React.Fragment>
    )
}

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience)
