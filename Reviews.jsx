// import React from 'react';

// const Reviews = () => {
//   const reviews = [
//     { id: 1, user: "John D.", destination: "Paris", rating: 5, comment: "Absolutely beautiful city! The Eiffel Tower at night is a must-see." },
//     { id: 2, user: "Sarah M.", destination: "Bali", rating: 4, comment: "Gorgeous beaches and friendly people. Some areas were a bit touristy though." },
//   ];

//   const renderStars = (rating) => {
//     return '★'.repeat(rating) + '☆'.repeat(5 - rating);
//   };

//   return (
//     <div>
//       <h1>Reviews and Recommendations</h1>
//       {reviews.map((review) => (
//         <div key={review.id} className="card">
//           <h2>{review.destination}</h2>
//           <p><strong>User:</strong> {review.user}</p>
//           <p><strong>Rating:</strong> {renderStars(review.rating)}</p>
//           <p>{review.comment}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Reviews;

import React, { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);
  const [userId, setUserId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch reviews for a specific destination
  const getReviews = async (destinationId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/reviews/${destinationId}`);
      const data = await response.json();

      if (response.ok) {
        setReviews(data.reviews);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error fetching reviews');
    }
    setLoading(false);
  };

  // Function to submit a review
  const addReview = async (e) => {
    e.preventDefault();

    if (!userId || !destinationId || !reviewText || !rating) {
      setError('All fields are required');
      return;
    }

    const reviewData = {
      userId,
      destinationId,
      reviewText,
      rating,
    };

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const data = await response.json();

      if (response.ok) {
        // Add the new review to the state
        setReviews((prevReviews) => [data.review, ...prevReviews]);
        setReviewText('');
        setRating(1);
        setUserId('');
        setDestinationId('');
        setError('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error adding review');
    }
  };

  // Example destination ID to test fetching reviews (You should replace this with dynamic ID)
  const destinationIdToFetch = 'destinationIdHere'; 

  // Fetch reviews on component mount
  useEffect(() => {
    if (destinationIdToFetch) {
      getReviews(destinationIdToFetch);
    }
  }, []);

  return (
    <div>
      <h1>Reviews for Destination</h1>

      {loading && <p>Loading reviews...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h2>Reviews</h2>
        <div>
          {reviews.length === 0 && !loading && <p>No reviews yet for this destination.</p>}
          {reviews.map((review) => (
            <div key={review._id} style={{ marginBottom: '20px' }}>
              <p><strong>User:</strong> {review.userId}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p><strong>Review:</strong> {review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Submit a Review</h2>
        <form onSubmit={addReview}>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
            />
          </div>
          <div>
            <label>Destination ID:</label>
            <input
              type="text"
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              placeholder="Enter the Destination ID"
            />
          </div>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter your rating (1-5)"
            />
          </div>
          <div>
            <label>Review:</label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Write your review here"
            />
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsPage;
