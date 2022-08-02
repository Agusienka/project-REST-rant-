const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
          No comments yet!
        </h3>
      )
      let rating = (
        <h3 className="inactive">
          Not yet rated
        </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
          return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '⭐️'
        }
        rating = (
          <h3>
            {stars} stars
          </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border col-sm-4">
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                <input type="submit" className="btn btn-danger" value="Delete Comment" />
              </form>
            </div>
          )
        })
      }
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <div>
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                  Edit
              </a>       
              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                      Delete
                  </button>
              </form>    
          </div>
          </main>
        </Def>
    )
}

module.exports = show
