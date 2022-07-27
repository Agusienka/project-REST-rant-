const React = require('react')
const Def = require('./default')

function home () {
  

        return (
          <Def>
            <div class="topnav">
                <a class="active" href='/'>Home</a>
                <a href='/places'>Places</a>
                <a href='/newPlace'>New Places</a>
            </div>
              <main>
                  <h1 className="heading text-center">REST-Rant</h1>
                  <div>
                    <img src="/images/cooldude.jpg" class="coolDude container row span4 " alt="pic of a chill dude" />
                  <div className="headerOne text-center">
                  Photo by <a  href='https://unsplash.com/@kalvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>KAL VISUALS</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
  
                  </div>
                  </div>
                  <a href="/places">
                  <button id="placeButton" className="bubbly-button btn-primary text-center">Places Page</button>
                  </a>
  
        
        
                  
                  
              </main>
          </Def>
        )

      }
      


module.exports = home
