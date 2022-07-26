const React = require('react')
const Def = require('./default')

function error404 () {
        return (
          <Def>
              <main>
                  <h1 className='heading text-center'>404: PAGE NOT FOUND</h1>
                  <p className='headerOne text-center'>Oops, sorry, we can't find this page!</p>
              <div>
               
                <img className="horseImg" src="/images/404.jpg" alt="Laughing horse, 404 error message" />
                
                <div className="headerTwo text-center">
                  Photo by <a href="https://unsplash.com/photos/MCauAnBJeig">Dan Cook </a> on <a href="https://unsplash.com/">UNSPLASH</a>
                </div>
              </div>

              </main>
          </Def>
        )
      }
      
module.exports = error404
