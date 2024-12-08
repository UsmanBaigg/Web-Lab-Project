import React from 'react';

const ExploreDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Lake Louise",
      type: "Lake",
      image: "/placeholder.svg?height=200&width=300",
      description: "A beautiful turquoise, glacier-fed lake in Banff National Park.",
      history: "Named after Princess Louise Caroline Alberta, daughter of Queen Victoria.",
      tips: "Visit early in the morning to avoid crowds and get the best photos."
    },
    {
      id: 2,
      name: "Mount Fuji",
      type: "Mountain",
      image: "/placeholder.svg?height=200&width=300",
      description: "Japan's highest mountain and an iconic symbol of the country.",
      history: "An active volcano that last erupted in 1707-1708.",
      tips: "The official climbing season is from early July to mid-September."
    },
  ];

  return (
    <div>
      <h1>Explore Destinations</h1>
      {destinations.map((destination) => (
        <div key={destination.id} className="card">
          <img src={destination.image} alt={destination.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
          <h2>{destination.name}</h2>
          <p><strong>Type:</strong> {destination.type}</p>
          <p>{destination.description}</p>
          <p><strong>History:</strong> {destination.history}</p>
          <p><strong>Travel Tip:</strong> {destination.tips}</p>
        </div>
      ))}
    </div>
  );
};

export default ExploreDestinations;

