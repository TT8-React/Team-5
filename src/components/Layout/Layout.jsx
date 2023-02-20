import { StyledLayout } from "./styeld";
import Header from "../Header";
import SideBar from "../SideBar";

function Layout(props) {
  return (
    <StyledLayout>
      <SideBar />
      <div className="page-content">
        <Header title={props.title} />
        {props.children}
      </div>
    </StyledLayout>
  );
}

export default Layout;
