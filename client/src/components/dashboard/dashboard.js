import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashBoardActions from './DashBoardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading }, deleteAccount }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile == null ? <Spinner /> : <React.Fragment>

        <h1 className="Large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fas fa-user">{' '}Welcome {user && user.name} </i>
        </p>
        {profile !== null ? <React.Fragment>
            <DashBoardActions />

            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className="my-2">
                <button className="btn btn-danger" onClick={() => deleteAccount()}>
                    <i className="fas fas-user"></i> Delete My Account
                </button>
            </div>
        </React.Fragment> : <React.Fragment>
                <p>You have not setup a profile, please add some more info</p>
                <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
            </React.Fragment>}
    </React.Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
