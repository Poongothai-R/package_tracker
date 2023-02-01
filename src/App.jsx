import "./styles/global/layout.css";
import "./styles/global/variable.css";
import Header from "./components/Header";
import Home from "./webpages/Home";
import useFetchData from "./hooks/useFetchData";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ParcelDetails from "./webpages/ParcelDetails";
import ErrorScreen from "./components/ErrorScreen";
import GoToTop from "./utils/goTop";


export default function App() {

    const apiURL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
    const {apiData, errorData, isLoading} = useFetchData({apiURL});

    return (
        <BrowserRouter>
            <GoToTop/>
            {!errorData && <Header/>}
            <Routes>
                <Route path="/" element={apiData ? <Home data={apiData}/> : (errorData ?
                       <ErrorScreen /> : (isLoading && <LoadingScreen/>))}/>
                <Route path="/parcel/:id" element={<ParcelDetails ParcelData={apiData}/>}/>
            </Routes>
            {!errorData && <Footer/>}
        </BrowserRouter>);
}

