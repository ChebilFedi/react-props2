import React from 'react';
import propTypes from 'prop-types';



function Profile(props) {


    return (
        <div className='Profile' >
            <h1 style={{fontFamily:'bold'}}>Full Name</h1>
            {props.fullName}
            <h1 style={{fontFamily:'bold'}}>Bio</h1>
            {props.bio}
            <h1 style={{fontFamily:'bold'}}>Profession</h1>

            {props.profession}
            <br></br>
            <a href="#" onClick={props.handleName} style={{fontFamily:'bold'}}>
                click me
        </a>
        </div>);
}
export default Profile;
Profile.defaultProps = {
    fullName:'Debra Carroll',
        bio:'Debra Carroll knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach! Mrs. Carroll was the 2011 Newell Unified School District Teacher of the Year, and received her National Board Certification in 2013. She loves science and majored in biology at Arizona State University, where she also earned her teaching credential and Master of Education degree. Mrs. Carroll is excited to begin the best year ever!'
      ,
      profession:'teacher',
    
}
Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
   
};