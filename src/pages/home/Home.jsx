
import "./home.scss";
import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import EnrollmentWidget from "../../components/widgets/EnrollmentWidget";
import EnrollmentTrend from "../../components/widgets/EnrollmentTrend";

const Home = () => {
  return (


    <Layout>

<div className="widgets">
          <EnrollmentWidget />
          <EnrollmentWidget />
          <EnrollmentTrend />

          <EnrollmentWidget />

          <EnrollmentWidget />

      
        </div>
    </Layout>
  );
};

export default Home;
