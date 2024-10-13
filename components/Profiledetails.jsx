import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Replace this with actual data fetching logic
    const fetchProfileDetails = async () => {
      const profiles = [
        { id: 1, name: 'John Doe', address: '123 Main St', contact: 'john@example.com', interests: ['Sports', 'Traveling'] },
        { id: 2, name: 'Jane Smith', address: '456 Park Ave', contact: 'jane@example.com', interests: ['Cooking', 'Reading'] },
        // Add more profiles here
      ];
      const foundProfile = profiles.find(profile => profile.id === parseInt(id));
      setProfile(foundProfile);
    };

    fetchProfileDetails();
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Address: {profile.address}</p>
      <p>Contact: {profile.contact}</p>
      <p>Interests: {profile.interests.join(', ')}</p>
    </div>
  );
}

export default ProfileDetails;
