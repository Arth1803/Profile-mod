// src/ProfileCard.jsx
import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
    return (
        <div className="profile-card">
            <div className="card-des">
                <img src={profile.photo} alt={profile.name} />
                <div className="card-title">
                    <h3>{profile.name}</h3>
                    <p>{profile.description}</p>
                </div>
            </div>
            <div className="card-btn">
                <button className='Profile-btn' onClick={() => onSummaryClick(profile.address)}>View Profile</button>
                <button className='summary-btn' onClick={() => onSummaryClick(profile.address)}>Summary</button>
            </div>
        </div>
    );
};

export default ProfileCard;
