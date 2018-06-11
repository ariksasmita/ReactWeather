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
      <form onSubmit={ this.onSubmit }>
        <input type="search" name="location" ref="location" placeholder="Search weather by city"/>
        <input className="button expanded hollow" type="submit" value="Get Weather"/>
      </form>
    )
  }
})

module.exports = WeatherForm
