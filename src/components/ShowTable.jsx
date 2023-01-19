import styled from "styled-components";
const ShowTable = ({ Users }) => {
  return (
    <Table>
      <table className="table">
        <thead>
          <tr>
            <th>آیدی</th>
            <th>نام مجموعه</th>
            <th>نوع</th>
            <th>آدرس سایت</th>
            <th>آدرس سرور</th>
            <th>شماره تماس</th>
            <th>وضعیت</th>
            <th>اکشن</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.type}</td>
              <td>{user.url}</td>
              <td>{user.server}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
              <td>
                <button className="table-btn">گرفتن بک آپ</button>
                <button className="table-btn">آپدیت کردن</button>
                <button className="table-btn">حذف کردن</button>
                <button className="table-btn">توقف سرور</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Table>
  );
};

export default ShowTable;

const Table = styled.div(() => ({
  "& .table": {
    width: "100%",
    overflow: "scroll",
    "*": {
      textAlign: "center",
    },
    "&-btn": {
      border: "none",
      outline: "none",
      marginInline: "10px",
      fontSize: "12px",
      marginBlock: "10px",
      cursor: "pointer",
    },
    "th , td": {
      width: "200px",
      borderBottom: "2px solid red",
    },
    td: {
      fontSize: "12px",
      margin: 0,
      padding: 0,
    },
    th: {
      margin: 0,
      height: "100px",
      fontSize: "14px",
    },
    tr: {
      border: "1px solid red",
    },
  },
}));
