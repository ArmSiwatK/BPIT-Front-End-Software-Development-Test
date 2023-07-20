import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideMenu from "./components/SideMenu/SideMenu";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <SideMenu />
        <div className="career-path">
          <div className="career-path-title">Career Path</div>
          <Chart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
