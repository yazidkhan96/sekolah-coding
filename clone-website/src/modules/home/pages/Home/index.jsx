import About from "../../../about/pages/About";
import Advantage from "../../../../components/Advantage";
import Benifits from "../../../../components/Benifits";
import Course from "../../../course/organism/Course";
import Footer from "../../../../containers/organism/Footer";
import JumbotronHome from "../../../home/organism/JumbotonHome";
import Price from "../../../../components/Price";
import Quote from "../../../../containers/organism/Qoute";
import Layout from "../../../../containers/templates/Layout";
import HeaderTitleCourse from "../../../course/organism/HeaderCourse";

const Home = () => {
    return (
        <>
       <Layout>
       <JumbotronHome/>
        <Advantage/>
        <Benifits/>
        <HeaderTitleCourse head="Mulai bersama daridasar.com" description="Platform belajar yang dapat membantumu belajar apapun dari dasar" textAlign="text-center" styleParagraph="lead" marginTop="mt-5"/>
        <Course/>
        <Price/>
        <Quote/>
        <About/>
        <Footer/>
       </Layout>
        </>
    );
}
 
export default Home;