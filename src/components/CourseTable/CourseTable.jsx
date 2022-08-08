import "./courseTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      teacher: "Oscar W.",
      img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      course: "History",
      mandatory: "yes",
      status: "Approved",
    },
    {
        id: 1143155,
        teacher: "Omer",
        img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        course: "IT",
        mandatory: "yes",
        status: "Approved",
      },
      {
        id: 1143155,
        teacher: "Abraham",
        img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        course: "Mathematics",
        mandatory: "yes",
        status: "Approved",
      },
      {
        id: 1143155,
        teacher: "Lotta",
        img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        course: "sport",
        mandatory: "yes",
        status: "Approved",
      },
      {
        id: 1143155,
        teacher: "Eva",
        img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        course: "Language",
        mandatory: "yes",
        status: "Approved",
      },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Course ID</TableCell>
            <TableCell className="tableCell">teacher </TableCell>
            <TableCell className="tableCell">course</TableCell>
            <TableCell className="tableCell">mandatory</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
           
              <TableCell className="tableCell">{row.course}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.teacher}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.mandatory}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;