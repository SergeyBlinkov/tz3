import MainRouter from "./routing/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/MediaStyles/MediaStylePhone.css";
import "./style/MediaStyles/MediaStyleTablet.css";
export default function SetupApp() {
  return <MainRouter />;
}
