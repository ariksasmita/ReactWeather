var React = require('react')

var WeatherMessage = ({
  temp,
  location,
}) => {
  return(
    <p>{ `It is now ${ temp }° in ${ location }` }</p>
  )
}

module.exports = WeatherMessage
