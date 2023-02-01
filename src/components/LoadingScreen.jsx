import "../styles/component/loadingScreen.css";

export default function LoadingScreen() {
    return (
            <div className="load-content">
                <h1> Welcome to Insta<span>Packet</span></h1>
                <p> Thanks for using InstaPacket app. we deliver your package fast & safe.
                    you will land to the app page in few seconds. we are fetching the data for you.
                </p>
                <h3> Page is loading...</h3>
            </div>
    );
}