const router = require('express').Router()
const places = require('../model/places.js')

router.get('/', (req, res) => {
        let places = [{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/thai.jpg'
          }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/coffeecat.jpg'
          }]
          
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  db.Place.findOne({ _id: req.params.id })
      .populate('comments')
      .then(place => {
          console.log(place.comments)
          res.render('places/show', { place })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
})

router.post('/', (req, res) => {
  console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
  places.push(req.body)
  res.redirect('POST /places')
})



  

module.exports = router
