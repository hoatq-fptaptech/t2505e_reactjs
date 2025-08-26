import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function Home(){
    const [city,setCity] = useState("Hanoi"); // var city; city = "Hanoi"
    const [weather,setWeather] = useState({ // nhớ tạo giá trị khởi tạo giống với dữ liệu thật
        main: {temp:0,humidity:0},
        wind: {speed:0},
        weather: [{description:"",icon:"01d"}]
    });
    // const changeCity = ()=>{
    //     setCity("saigon");
    // }
    // const changeLondon = ()=>{
    //     setCity("london");
    // }

    // const changeTokyo = ()=>{
    //     setCity("tokyo");
    // }
    // const setHN = ()=>{
    //     setCity("Hanoi");
    // }
    useEffect(()=>{
        // sẽ chạy sau khi có sự thay đổi của state city
        console.log("Thành phố thay đổi: ",city);
        getWeather();
    },[city]); // gọi lại hàm mỗi khi city thay đổi => đây là 1 hàm lắng nghe (listener) sự thay đổi của state city

    // call api
    const getWeather = async ()=>{
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
            const rs = await fetch(url);
            const data = await rs.json();
            setCity(data.name);
            setWeather(data);
        } catch (error) {
            
        }
    }

    // lăng nghe sự thay đổi của state sau khi render
    useEffect(()=>{
        console.log("Component đã được render");
        // gọi API lấy dữ liệu thời tiết
       getWeather();
       // làm nhiều việc khác

    },[]); // hàm này chỉ chạy 1 lần sau khi render lần đầu tiên
    // tại sao phải lắng nghe sự thay đổi sau khi render?
    // vì sau khi render, giao diện đã có, ta có thể thao tác với giao diện
    // ví dụ: gọi API, thao tác với DOM, thiết lập các thư viện bên
    return (
        <div>
            <h1>Thời tiết tại {city}</h1>
            <h2>Nhiệt độ: {weather.main.temp} độ C</h2>
            <h2>Độ ẩm: {weather.main.humidity}%</h2>
            <h2>Gió: {weather.wind.speed} km/h</h2>
            <h2>Trạng thái: {weather.weather[0].description}</h2>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="sunny"/>
            <Button onClick={()=>setCity("saigon")} variant="primary">HCM</Button>
            <Button onClick={()=>setCity("london")} variant="primary">London</Button>
            <Button onClick={()=>setCity("tokyo")} variant="primary">Tokyo</Button>
            <Button onClick={()=>setCity("hanoi")} variant="primary">HN</Button>
        </div>
    )
};
export default Home;