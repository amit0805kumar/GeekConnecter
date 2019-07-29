import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExp from './ProfileExp'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
const Profile = ({ match, getProfileById, auth, profile: { profile, loading } }) => {

    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);
    return (
        <React.Fragment>
            {profile === null || loading === true ? <Spinner /> : <React.Fragment>
                <Link to="/profiles" className="btn btn-light">Bact To Profiles</Link>

                {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to="/edit-profile" className="btn btn-dark">Edit Profile</Link>)}

                <div className="profile-grid my-1">
                    <ProfileTop profile={profile} />
                    <ProfileAbout profile={profile} />
                    <div className="profile-exp bg-white p-2">
                        <h2 className="text-primary">Experience</h2>
                        {
                            profile.experience.length > 0 ? (<React.Fragment>
                                {profile.experience.map(experience => (
                                    <ProfileExp key={experience._id} experience={experience} />
                                ))}
                            </React.Fragment>) : (<h4>No experience credential</h4>)
                        }
                    </div>
                    <div className="profile-edu bg-white p-2">
                        <h2 className="text-primary">Education</h2>
                        {
                            profile.education.length > 0 ? (<React.Fragment>
                                {profile.education.map(education => (
                                    <ProfileEducation key={education._id} education={education} />
                                ))}
                            </React.Fragment>) : (<h4>No education credential</h4>)
                        }
                    </div>

                    {
                        profile.githubusername && (
                            <ProfileGithub username={profile.githubusername} />
                        )
                    }


                </div>
            </React.Fragment>}
        </React.Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})
export default connect(mapStateToProps, { getProfileById })(Profile)
