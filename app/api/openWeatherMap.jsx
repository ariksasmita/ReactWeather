var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=cdc06fab41045afce5f38fa0f21e9dee'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${ OPEN_WEATHER_MAP_URL }&q=${ encodedLocation }`

    return axios.get(requestUrl).then(
      function(resp){
        if(resp.response && resp.response.data.cod && resp.response.data.message){
          throw new Error(res.response.data.message)
        } else {
          return resp.data.main.temp
        }
      },
      function(resp){
        throw new Error(resp.response.data.message)
      }
    )
  }
}
