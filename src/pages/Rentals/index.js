function createRental(movieId, userId, token) {
    return fetch('http://localhost:3000/rentals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            movie_id: movieId,
            user_id: userId
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Request failed with status ' + response.status)
            }
        })
}

export default createRental;
