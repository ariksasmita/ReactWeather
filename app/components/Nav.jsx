var React = require('react')
var { Link, IndexLink } = require('react-router')

var Nav = React.createClass({
  onSearch: (e) => {
    e.preventDefault()
    alert('hey, hello!')
  },
  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active">Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={ this.onSearch }>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather" />
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
})

module.exports = Nav

