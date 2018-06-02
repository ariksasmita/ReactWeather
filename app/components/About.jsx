var React = require('react')
var { Link } = require('react-router')

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to about page. This app made with React from Facebook and using API from OpenWeatherMap. Links can be found below, with Github repo to tihs project as well</p>
      <ul>
        <li><Link to="https://reactjs.org/">ReactJS</Link></li>
        <li><Link to="https://openweathermap.org/">OpenWeatherMap</Link></li>
        <li><Link to="https://github.com/ariksasmita/ReactWeather">Github Repository</Link></li>
      </ul>
    </div>
  )
}

module.exports = About
