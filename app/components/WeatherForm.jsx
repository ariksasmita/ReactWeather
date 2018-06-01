var React = require('react')

var WeatherForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    
    var location = this.refs.location.value
    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
    }
  },
  render: function() {
    return(
      <div>
        <h3>Get Weather</h3>
        <form onSubmit={ this.onSubmit }>
          <input type="text" name="location" ref="location" placeholder="Enter city name"/>
          <input type="submit" value="Get Weather"/>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm
