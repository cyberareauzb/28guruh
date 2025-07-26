import axios from "axios";
import Admin from "./Components/Layouts/Admin/Admin";
import Login from "./Components/Layouts/Auth/Login";
import SiteLayout from "./Components/Layouts/Site/SiteLayout";
import { Spin } from "antd";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  let [loading, setLoading] = useState(false)
  axios.defaults.baseURL = "https://cyberss.uz/api"
  axios.defaults.headers.common["Content-Type"] = "application/json"
  axios.defaults.headers.common.Authorization = "Bearer " + localStorage.getItem('token')

  let abc = 159

  let navigate = useNavigate()

  axios.interceptors.request.use(function (config) {
    setLoading(true)
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(
    function (response) {
      setLoading(false)
      return response;
    },
    function (error) {
      if (error.status === 401) {
        navigate('/login')
        setLoading(false)
      }
      if (error.status === 404) {
        alert("Bunaqa resurs mavjud emas")
        return null
      }
      return Promise.reject(error);
    });

  return (
    <>
      <div style={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '9999',
        display: loading ? 'flex' : 'none',
        backgroundColor: '#ffffff69',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Spin size="large" />
      </div>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login setLoader={setLoading} />} />
          <Route path="/dashboard/*" element={<Admin />} />
          <Route path="*" element={<SiteLayout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
