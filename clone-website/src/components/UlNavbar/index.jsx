import LiNavbar from "../../containers/organism/LiNavbar/LiNavbar"

const UlNavbar = () => {
    return (
    <>
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <LiNavbar title="kelas" linkTo="/course"/>
            <LiNavbar title="buku"/>
            <LiNavbar title="Blog"/>
        </ul>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <LiNavbar title="Login" linkTo="/login"/>
            <LiNavbar title="Get Started" styleLink="btn btn-primary rounded-pill text-white" linkTo="/signup"/>
        </ul>
    </>
     );
}
 
export default UlNavbar;