var React = require('react')
var { Link } = require('react-router')

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>Welcome to about page. This app made with React from Facebook and using API from OpenWeatherMap. Links can be found below, with Github repo to tihs project as well</p>
      <ul>
        <li><a href="https://reactjs.org/">ReactJS</a></li>
        <li><a href="https://openweathermap.org/">OpenWeatherMap</a></li>
        <li><a href="https://github.com/ariksasmita/ReactWeather">Github Repository</a></li>
      </ul>
    </div>
  )
}

module.exports = About
