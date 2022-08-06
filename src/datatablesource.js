export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "student",
    headerName: "Student",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.student}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },

  {
    field: "class",
    headerName: "Class",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    student: "Student-1  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "student@gmail.com",
    class: 2,
  },
  {
    id: 2,
    student: "Student-2  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 2,
  },
  {
    id: 3,
    student: "Student-3  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "pending",
    class: 4,
  },
  {
    id: 4,
    student: "Student-4  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 3,
  },
  {
    id: 5,
    student: "Student-5  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 2,
  },
  {
    id: 6,
    student: "Student-6  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 5,
  },
  {
    id: 7,
    student: "Student-7  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 4,
  },
  {
    id: 8,
    student: "Student-8  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 3,
  },
  {
    id: 9,
    student: "Student-9  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "pending",
    class: 5,
  },
  {
    id: 10,
    student: "Student-10  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 5,
  },
  {
    id: 11,
    student: "Student-1  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    status: "active",
    email: "student@gmail.com",
    class: 2,
  },
  {
    id: 12,
    student: "Student-2  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 2,
  },
  {
    id: 13,
    student: "Student-3  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "pending",
    class: 4,
  },
  {
    id: 14,
    student: "Student-4  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 3,
  },
  {
    id: 15,
    student: "Student-5  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 2,
  },
  {
    id: 16,
    student: "Student-6  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 5,
  },
  {
    id: 17,
    student: "Student-7  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "passive",
    class: 4,
  },
  {
    id: 18,
    student: "Student-8  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 3,
  },
  {
    id: 19,
    student: "Student-9  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "pending",
    class: 5,
  },
  {
    id: 20,
    student: "Student-10  Surname",
    img: "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    email: "student@gmail.com",
    status: "active",
    class: 5,
  },
];
