import { Link, Outlet } from "react-router-dom";
import Button from "./Button";

const index = ({ projectLinks }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        {projectLinks.map((link) => (
          <Link to={link.path}>
            <Button name={link.text} />
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default index;
