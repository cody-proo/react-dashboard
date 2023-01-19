import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <div className="input-group">
        <label className="input-label">نام کاربری</label>
        <input type="email" className="input" />
        <small className="input-error">آدرس ایمیل خود را وارد کنید</small>
      </div>
      <div className="input-group">
        <label className="input-label">گذرواژه</label>
        <input type="password" className="input" />
        <small className="input-error">پسورد خود را وارد نمایید</small>
      </div>
      <button className="button">ورود</button>
    </Container>
  );
};

export default Login;

const Container = styled("form")(() => ({
  width: "90%",
  maxWidth: "400px",
  marginInline: "auto",
  paddingBlock: "20px",

  "& .button": {
    width: "100%",
    marginBlock: "10px",
    height: "40px",
    background: "#3B82F6",
    color: "#fff",
    outline: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
  },

  "& .input-group": {
    display: "flex",
    flexDirection: "column",
    marginBlock: "20px",
  },

  "& .input": {
    height: "40px",
    border: "none",
    boxShadow: "0 0 5px 1px #eee",
    paddingInline: "10px",
    outline: "none",
    borderRadius: "4px",
  },

  "& .input-label": {
    fontSize: "14px",
    marginBottom: "5px",
  },

  "& .input-error": {
    fontSize: "10px",
    paddingInline: "4px",
    marginBlock: "4px",
    color: "red",
  },
}));
