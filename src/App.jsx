import "./app.css";
import "./styles/global/variable.css";
import Navbar from "./components/Navbar";
import HomePage from "./webpages/HomePage";
import useFetchData from "./utils/useFetchData";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import ParcelDetails from "./webpages/ParcelDetails";
import ErrorPage from "./components/ErrorPage";
import GoToTop from "./utils/goTop";


export default function App() {

    const apiURL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
    const {apiData, errorData, isLoading} = useFetchData({apiURL});

    return (
        <BrowserRouter>
            <GoToTop/>
            {!errorData && <Navbar/>}
            <Routes>
                <Route path="/" element={apiData ? <HomePage data={apiData}/> : (errorData ?
                       <ErrorPage /> : (isLoading && <Loading/>))}/>
                <Route path="/parcel/:id" element={<ParcelDetails ParcelData={apiData}/>}/>
            </Routes>
            {!errorData && <Footer/>}
        </BrowserRouter>);
}

