import "./studentList.scss";
import Datatable from "../../components/dataTable/Datatable";
import Layout from "../../components/layout/Layout";

const StudentList = () => {
  return (
    <Layout>
      <div className="list">
        <Datatable />
      </div>
    </Layout>
  );
};

export default StudentList;
