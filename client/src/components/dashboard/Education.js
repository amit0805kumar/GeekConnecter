import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../../actions/profile';


const Education = ({ education, deleteEducation }) => {

    const educations = education.map(education => (
        <tr key={education._id} >
            <td>{education.school}</td>
            <td className="hide-sm">{education.degree}</td>
            <td>
                <Moment format="YYYY/MM/DD">{education.from}</Moment> - {' '} {
                    education.to === null ? (' Now') : (<Moment format="YYYY/MM/DD">{education.to}</Moment>)
                }
            </td>
            <td><button onClick={() => { deleteEducation(education._id) }} className="btn btn-danger">Delete</button></td>
        </tr>
    ))
    return (
        <React.Fragment>
            <h2 className="my-2">Education credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th className='hide-sm'>Degree</th>
                        <th className='hide-sm'>Years</th>
                        <th />
                    </tr>
                </thead>
                <tbody>{
                    educations
                }</tbody>
            </table>
        </React.Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Education)
