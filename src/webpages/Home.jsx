import "../styles/webpages/homepage.css";
import TrackPackage from "../components/TrackPackage";
import TrackHistory from "../components/TrackHistory";

export default function Home({data}) {
    
    const userName = data
                    .map((recs)=>recs.user_name)
                    .filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div className="home-page" id="homepage">
            <h1> Hello! {userName}</h1>
            <TrackPackage />
            <TrackHistory data={data}/>
        </div>
    );
}