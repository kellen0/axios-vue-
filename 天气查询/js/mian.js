var app = new Vue({
    el: "#app",
    data: {
        city: '郑州',
        weatherList: [],
    },
    methods: {
        searchWeather: function() {
            var that = this;
            //调用接口
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(
                function(response) {
                    that.weatherList = response.data.data.forecast;
                    // console.log(response);
                },
                function(err) {}
            )
        },
        changeCity: function(city) {
            this.city = city;
            this.searchWeather();
        }
    }
})