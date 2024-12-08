import React from 'react';

const Dashboard = () => {
  const recentItineraries = [
    { id: 1, name: "Mountain Adventure", date: "2023-06-15" },
    { id: 2, name: "Beach Getaway", date: "2023-07-01" },
  ];

  const savedSpots = [
    { id: 1, name: "Eiffel Tower", location: "Paris, France" },
    { id: 2, name: "Grand Canyon", location: "Arizona, USA" },
  ];

  const recommendations = [
    { id: 1, name: "Tokyo", description: "Experience the blend of traditional and modern" },
    { id: 2, name: "Bali", description: "Relax on beautiful beaches and explore lush jungles" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="card">
        <h2>Recent Itineraries</h2>
        <ul>
          {recentItineraries.map((itinerary) => (
            <li key={itinerary.id}>{itinerary.name} - {itinerary.date}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Saved Spots</h2>
        <ul>
          {savedSpots.map((spot) => (
            <li key={spot.id}>{spot.name} - {spot.location}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Recommendations</h2>
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id}><strong>{rec.name}</strong>: {rec.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

