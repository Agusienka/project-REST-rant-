
const React = require('react')
const Def = require('../default')

    function index (data) {
        let placesFormatted = data.places.map((place) => {
          return (
            <div key={index} className=" col-md-4 " >
              <h2>
              <a href={`/places/${index}`}>{place.name}</a>
              </h2>
              <p className="headerTwo text-left">
                {place.cuisines}
              </p>
              <img className="placesIndxPics" src={place.pic} alt={place.name}/>
              <p className="headerThree text-left">
                Located in {place.city}, {place.state}
              </p>
            </div>
          )
        })
      
        return (
          <Def>
              <main>
                  <h1 className='heading text-center'>Places to Rant or Rave About</h1>
                  <div className='row'>
                    {placesFormatted}
                  </div>
              </main>
          </Def>
        )
        }
      


module.exports = index











