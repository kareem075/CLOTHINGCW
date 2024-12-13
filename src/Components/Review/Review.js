import React, { useState } from 'react';
import './Review.css';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, review };
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        setName('');
        setReview('');
    };

    return (
        <div className="review-container">
            <h2>Leave a Review</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="review">Review:</label>
                <textarea
                    id="review"
                    name="review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <div className="reviews-list">
                <h2>Reviews</h2>
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <h3>{review.name}</h3>
                            <p>{review.review}</p>
                        </div>
                    ))
                ) : (
                    <p>No reviews yet. Be the first to leave a review!</p>
                )}
            </div>
        </div>
    );
}

export default Review;
