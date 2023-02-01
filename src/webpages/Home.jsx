import "../styles/webpages/homepage.css";
import TrackPackage from "../components/TrackPackage";
import TrackHistory from "../components/TrackHistory";
import { useTranslation } from 'react-i18next';

export default function Home({data}) {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    
    const userName = data
                    .map((recs)=>recs.user_name)
                    .filter((value, index, self) => self.indexOf(value) === index);

    return (
        <div className="home-page" id="homepage">
            <h1> {t('hello')}! {userName}</h1>
            <button className="btn" onClick={() => changeLanguage('sw')}>swedish</button>
            <TrackPackage />
            <TrackHistory data={data}/>
        </div>
    );
}