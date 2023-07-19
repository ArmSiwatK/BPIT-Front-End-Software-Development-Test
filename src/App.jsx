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
        <Chart />
      </div>
      <Footer />
    </>
  );
}

export default App;
