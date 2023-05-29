import { FC } from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "50px 100px",
        }}
      >
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <h1>Header</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
