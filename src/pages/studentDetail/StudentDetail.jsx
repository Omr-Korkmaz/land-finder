import "./studentDetail.scss";
import Chart from "../../components/chart/Chart";
import List from "../../components/CourseTable/CourseTable";
import Layout from "../../components/layout/Layout";

const StudentDetail = () => {
  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-container__top">
          <div className="detail-container__top__left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Lotta</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">lottalotta@email.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+46 1234567890</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Handen Haninge 12 Upsalla Stockholm
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Sweden</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__table">
            <h1 className="title">Courses</h1>
            <List />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDetail;
