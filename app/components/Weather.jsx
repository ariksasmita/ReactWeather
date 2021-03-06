var React = require('react')

var WeatherForm = require('./WeatherForm')
var WeatherMessage = require('./WeatherMessage')
var ErrorModal = require('./ErrorModal')

var openWeatherMap = require('../api/openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errorMessage: undefined,
    }
  },
  componentDidMount: function() {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  componentWillReceiveProps: function(nextProps) {
    var location = nextProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  },
  onClose: function () {
    this.setState({
      isError: false,
    })
  },
  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    })
    openWeatherMap.getTemp(location).then(
      (temp) => {
        this.setState({
          location: location,
          temp: temp,
          isLoading: false,
        })
      },
      (e) => {
        this.setState({
          isLoading: false,
          errorMessage: e.message,
        })
      }
    )
  },
  render: function() {
    var {
      location,
      temp,
      isLoading,
      errorMessage,
    } = this.state

    var { onClose } = this

    const renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Loading weather...</h3>
      }
      if (location && temp) {
        return <WeatherMessage location={ location } temp={ temp } />
      }
    }

    const renderError = () => {
      if (typeof errorMessage === 'string') {
        return <ErrorModal message={ errorMessage } />
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={ this.handleSearch } />
        { renderMessage() }
        { renderError() }

      </div>
    )
  }
})

module.exports = Weather
