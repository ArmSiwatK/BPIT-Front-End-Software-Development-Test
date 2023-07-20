import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideMenu from "./components/SideMenu/SideMenu";
import Chart from "./components/Chart/Chart";
import JobDetails from "./components/JobDetails/JobDetails";
import Footer from "./components/Footer/Footer";
import PromotionCriteria from "./assets/PromotionCriteria.json";
import FastTrackCriteria from "./assets/FastTrackCriteria.json";
import EmployeeData from "./assets/MockEmployee.json";
import "./styles/App.scss";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="main">
        <SideMenu />
        <div className="career-path">
          <div className="career-path-title">Career Path</div>
          {/* <Chart /> */}
          <JobDetails promotionCriteria={PromotionCriteria} fastTrackCriteria={FastTrackCriteria} employeeData={EmployeeData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
