import "../../styles/webpages/homepage.css";
import TrackPackage from "../../components/TrackPackage";
import ParcelHistory from "../../components/ParcelHistory";
import { useTranslation } from "react-i18next";

export default function Home({ data }) {
  const { t } = useTranslation();
  const userName = data
    .map((recs) => recs.user_name)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className="home-page" id="homepage">
      <h1>
        {" "}
        {t("hello")}! {userName}
      </h1>
      <TrackPackage data={data} />
      <ParcelHistory data={data} />
    </div>
  );
}
