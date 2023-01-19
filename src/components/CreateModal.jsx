import styled from "styled-components";

const CreateModal = ({ onClose }) => {
  return (
    <Container>
      <div className="content">
        <div className="content-header">
          <h1 className="content-title">فرم ساخت مجموعه</h1>
          <button className="content-btn" onClick={() => onClose()}>
            بستن
          </button>
        </div>
        <form action="" className="form">
          <div className="input-group">
            <label className="input-label">نام مجموعه</label>
            <input className="input" type="text" />
            <small className="input-error">نام مجموعه خود را وارد کنید</small>
          </div>
          <div className="input-group">
            <label className="input-label">دامین</label>
            <input className="input" type="text" />
            <small className="input-error">دامین خود را وارد کنید</small>
          </div>
          <div className="input-group">
            <label className="input-label">آدرس سرور</label>
            <input className="input" type="text" />
            <small className="input-error">آدرس سرور خود را وارد کنید</small>
          </div>
          <div className="input-group">
            <label className="input-label">پورت سرور</label>
            <input className="input" type="text" />
            <small className="input-error">پورت سرور خود را وارد کنید</small>
          </div>
          <div className="input-group">
            <label className="input-label">شماره تماس</label>
            <input className="input" type="text" />
            <small className="input-error">شماره تماس خود را کنید</small>
          </div>
          <div className="input-group">
            <label className="input-label">نوع اپ</label>
            <select name="" id="" className="input">
              <option value="">لطفا نوع اپ رو انتخاب کنید</option>
              <option value="gymsoft">gymsoft</option>
              <option value="varzeshsoft">varzeshsoft</option>
            </select>
          </div>
          <button className="btn">ایجاد مجموعه</button>
        </form>
      </div>
    </Container>
  );
};

export default CreateModal;

const Container = styled("div")(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,.8)",

  "& .content": {
    width: "400px",
    background: "#fff",
    paddingInline: "20px",
    borderRadius: "4px",
    maxHeight: "700px",
    overflowY: "auto",
    "&-header": {
      height: "50px",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #eee",
    },
    "&-btn": {
      paddingInline: "20px",
      height: "35px",
      background: "red",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    "&-title": {
      fontSize: "14px",
    },
  },

  "& .input-group": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginBlock: "10px",
  },

  "& .input-label": {
    fontSize: "14px",
    marginBottom: "3px",
  },

  "& .input-error": {
    color: "red",
    fontSize: "10px",
  },

  "& .input": {
    width: "100%",
    border: "none",
    background: "#ddd",
    height: "35px",
    paddingInline: "10px",
    outline: "none",
    borderRadius: "4px",
  },
  "& .btn": {
    background: "#3B82F6",
    color: "#fff",
    outline: "none",
    border: "none",
    height: "40px",
    width: "100%",
    marginBottom: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
}));
