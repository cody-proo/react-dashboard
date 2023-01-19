import styled from "styled-components";

const ShowCard = ({ Users }) => {
  return (
    <Card>
      {Users.map((user) => (
        <ul className="list">
          <li className="item">
            <span>
              <b>آیدی</b>
            </span>
            <span>{user.id}</span>
          </li>
          <li className="item">
            <span>
              <b>نام مجموعه</b>
            </span>
            <span>{user.name}</span>
          </li>
          <li className="item">
            <span>
              <b>نوع</b>
            </span>
            <span>{user.status}</span>
          </li>
          <li className="item">
            <span>
              <b>آدرس سایت</b>
            </span>
            <span>{user.url}</span>
          </li>
          <li className="item">
            <span>
              <b>آدرس سرور</b>
            </span>
            <span>{user.server}</span>
          </li>
          <li className="item">
            <span>
              <b>شماره تماس</b>
            </span>
            <span>{user.phone}</span>
          </li>
          <li className="item">
            <span>
              <b>وضعیت</b>
            </span>
            <span>{user.status}</span>
          </li>
          <li className="item">
            <button className="item-btn">گرفتن بک آپ</button>
          </li>
          <li className="item">
            <button className="item-btn">آپدیت کردن</button>
          </li>
          <li className="item">
            <button className="item-btn">حذف کردن</button>
          </li>
          <li className="item">
            <button className="item-btn">توقف سرور</button>
          </li>
        </ul>
      ))}
    </Card>
  );
};

const Card = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  "& .list": {
    width: "40%",
  },
  "& .item": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&-btn": {
      width: "100%",
      height: "45px",
      marginBlock: "10px",
      cursor: "pointer",
    },
  },
}));

export default ShowCard;
