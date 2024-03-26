import React, { useState } from 'react';
import './style.css'; // assuming you have separate CSS file for styling

const profilesData = {
  mainland: [
    { id: 1, name: 'John Doe', designation: 'CEO', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 2, name: 'Jane Smith', designation: 'CTO', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 3, name: 'Alice Johnson', designation: 'CFO', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 4, name: 'Bob Brown', designation: 'COO', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' }
  ],
  freezone: [
    { id: 5, name: 'Emily Williams', designation: 'Manager', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 6, name: 'Michael Clark', designation: 'Director', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 7, name: 'Sarah Taylor', designation: 'Team Lead', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 8, name: 'David Wilson', designation: 'Developer', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' }
  ],
  offshore: [
    { id: 9, name: 'Ella Anderson', designation: 'Project Manager', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 10, name: 'James Martinez', designation: 'Analyst', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 11, name: 'Olivia Brown', designation: 'Consultant', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' },
    { id: 12, name: 'Daniel Thomas', designation: 'Architect', image: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg' }
  ]
};

const Profile = ({ name, designation, image }) => (
  <div className="profile">
    <img src={image} alt="Profile" />
    <h4>{name}</h4>
    <p>{designation}</p>
  </div>
);

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <button className={activeTab === 'mainland' ? 'active' : ''} onClick={() => setActiveTab('mainland')}>Mainland</button>
    <button className={activeTab === 'freezone' ? 'active' : ''} onClick={() => setActiveTab('freezone')}>Freezone</button>
    <button className={activeTab === 'offshore' ? 'active' : ''} onClick={() => setActiveTab('offshore')}>Offshore</button>
  </div>
);

const Profiles = ({ activeTab }) => (
  <div className="profiles">
    {profilesData[activeTab].map(profile => (
      <Profile key={profile.id} {...profile} />
    ))}
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('mainland');

  return (
    <div className="container">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Profiles activeTab={activeTab} />
    </div>
  );
};

export default App;
