import "./app.css";
import "./styles/global/variable.css";
import Navbar from "./components/Navbar";
import HomePage from "./webpages/HomePage";
import useFetchData from "./lib/useFetchData";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ParcelDetails from "./webpages/ParcelDetails";


export default function App() {

    const apiURL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
    const {apiData, errorData, isLoading} = useFetchData({apiURL});

    return (<BrowserRouter>
            {!errorData && <Navbar/>}
            <Routes>
                <Route path="/" element={apiData ? <HomePage data={apiData}/> : (errorData ?
                        <h1> Page not found.. Check your details please.. </h1> : (isLoading && <Loading/>))}/>
                <Route path="/parcel/:id" element={<ParcelDetails ParcelData={apiData}/>}/>
            </Routes>
            {!errorData && <Footer/>}
        </BrowserRouter>);
}

