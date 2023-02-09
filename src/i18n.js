import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      hello: "Hello",
      track_your_package: "Track Your Package",
      enter_parcel_id: "Enter Your Parcel ID",
      track_now: "Track Now",
      your_packages: "Your Packages",
      your_parcel_details: "Your Parcel Details ",
      tracking_status: "Tracking Status",
      location: "Location",
      go_back: "Go Back",
      info_received: "Order info received",
      ready_for_pickup: "ready for pickup",
      on_the_way: "On the way",
      delivered: "Delivered",
      parcel_id: "Parcel id",
      sender: "Sender",
      from: "From",
      verification_required: "Verification Required",
      notes: "Notes",
      last_updated: "Last Updated",
      yes: "Yes",
      no: "No",
      paragraph:
        "Thanks for using InstaPacket app. we deliver your package fast & safe.you will land to the app page in few seconds. we are fetching the data for you.",
      para: "Page is Loading...",
      alert: "Please Check your Parcel ID",
    },
  },
  sw: {
    translation: {
      hello: "Hej",
      track_your_package: "Spåra Ditt Paket",
      enter_parcel_id: "Ange Ditt Paket ID",
      track_now: "Spåra Nu",
      your_packages: "Dina Paket",
      your_parcel_details: "Dina Paket Uppgifter",
      tracking_status: "Spårnings status",
      location: "Karta Plats",
      go_back: "Gå Tillbaka",
      info_received: "Beställningsinformation Mottagen",
      ready_for_pickup: "Redo för Upphämtning",
      on_the_way: "På Väg",
      delivered: "levereras",
      parcel_id: "Paket id",
      sender: "Avsändare",
      from: "från",
      verification_required: "Verifikation Krävs",
      notes: "Anteckningar",
      last_updated: "Senast Uppdaterad",
      yes: "Ja",
      no: "Nej",
      paragraph:
        "Tack för att du använder InstaPacket-appen. vi levererar ditt paket snabbt och säkert.du kommer till appsidan på några sekunder. vi hämtar uppgifterna åt dig.",
      para: "Sidan laddas...",
      alert: "kontrollera ditt paket ID",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "sw",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
