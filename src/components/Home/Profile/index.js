import React from 'react'
import './index.scss'
import profile from '../../../assets/images/pf_img.png';

const Profile = () => {
  return (
    <div class="profile-container">
        <img className='profile-img' src={profile} />
    </div>
  )
}

export default Profile