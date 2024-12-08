import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, type: "Road Situation", message: "Road closure on Highway 1 due to landslide. Expected to reopen in 2 days." },
    { id: 2, type: "Travel Restriction", message: "New visa requirements for entering Country X. Please check official website for details." },
    { id: 3, type: "Seasonal Condition", message: "Heavy snowfall expected in the mountain regions next week. Plan accordingly." },
  ];

  return (
    <div>
      <h1>Notifications and Alerts</h1>
      {notifications.map((notification) => (
        <div key={notification.id} className="card">
          <h2>{notification.type}</h2>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;

