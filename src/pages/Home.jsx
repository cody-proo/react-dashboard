import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CreateModal from "../components/CreateModal";
import ShowCard from "../components/ShowCard";
import ShowTable from "../components/ShowTable";

const Users = [
  {
    name: "آرینا",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 1,
    phone: "095455455454",
    type: "gymsoft",
    status: "فعال",
  },
  {
    name: "پاد",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 2,
    phone: "095455455454",
    type: "gymsoft",
    status: "فعال",
  },
  {
    name: "تبریز",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 3,
    phone: "095455455454",
    type: "varzeshsoft",
    status: "غیرفعال",
  },
  {
    name: "دکتر ابیدی",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 4,
    phone: "095455455454",
    type: "gymsoft",
    status: "فعال",
  },
  {
    name: "بندرعباس",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 5,
    phone: "095455455454",
    type: "gymsoft",
    status: "فعال",
  },
  {
    name: "ورزش",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 6,
    phone: "095455455454",
    type: "varzeshsoft",
    status: "غیرفعال",
  },
  {
    name: "حس خوب زندگی",
    url: "https://arina.gymsoft.ir",
    server: "192.168.10.50",
    id: 7,
    phone: "095455455454",
    type: "varzeshsoft",
    status: "غیرفعال",
  },
];

const Home = () => {
  const [printType, setPrintType] = useState(
    window.localStorage.getItem("type") || "card"
  );
  const [openModal, setOpenModal] = useState(false);
  const isFirstRender = useRef(false);
  useEffect(() => {
    if (isFirstRender.current) {
      window.localStorage.setItem("type", printType);
    }
    isFirstRender.current = true;
  }, [printType]);
  return (
    <Container>
      {openModal && <CreateModal onClose={() => setOpenModal(false)} />}
      <div className="header">
        <h1 className="header-title">مدیریت سرورهای نرم افزار</h1>
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="header-btn header-btn-save"
          >
            ایجاد مجموعه
          </button>
          <button onClick={() => setPrintType("table")} className="header-btn">
            نمایش جدولی
          </button>
          <button onClick={() => setPrintType("card")} className="header-btn">
            نمایش کاردی
          </button>
        </div>
      </div>
      {printType === "table" && <ShowTable Users={Users} />}
      {printType === "card" && <ShowCard Users={Users} />}
    </Container>
  );
};

export default Home;

const Container = styled("div")(() => ({
  width: "90%",
  marginInline: "auto",

  "& .header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBlock: "20px",
    "&-btn": {
      color: "#fff",
      outline: "none",
      border: "none",
      cursor: "pointer",
      borderRadius: "4px",
      background: "#3B82F6",
      height: "40px",
      paddingInline: "20px",
      marginInlineEnd: "10px",
      "&-save": {
        background: "#888",
      },
    },
    "&-title": {
      fontSize: "19px",
    },
  },
}));
