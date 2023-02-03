import "../../styles/component/loadingScreen.css";
import { useTranslation } from "react-i18next";

export default function LoadingScreen() {
    const { t } = useTranslation();
    return (
            <div className="load-content">
                <h1> Welcome to Insta<span>Packet</span></h1>
                <p> {t('paragraph')}
                </p>
                <p> {t('para')}</p>
            </div>
    );
}