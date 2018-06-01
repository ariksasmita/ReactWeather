var React = require('react')

var WeatherForm = require('./WeatherForm')
var WeatherMessage = require('./WeatherMessage')
var openWeatherMap = require('../api/openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
    }
  },
  handleSearch: function (location) {
    this.setState({
      isLoading: true,
    })
    openWeatherMap.getTemp(location).then(
      (temp) => {
        this.setState({
          location: location,
          temp: temp,
          isLoading: false,
        })
      },
      (err) => {
        alert('err')
        this.setState({
          isLoading: false,
        })
      }
    )
  },
  render: function() {
    var {
      location,
      temp,
      isLoading,
    } = this.state

    const renderMessage = () => {
      if (isLoading) {
        return <h3>Loading weather...</h3>
      }
      if (location && temp) {
        return <WeatherMessage location={ location } temp={ temp } />
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={ this.handleSearch } />
        { renderMessage() }
      </div>
    )
  }
})

module.exports = Weather
