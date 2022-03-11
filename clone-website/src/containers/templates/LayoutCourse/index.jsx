import About from "../../../modules/about/pages/About"
import Footer from "../../organism/Footer"
import JumbotronHome from "../../../modules/home/organism/JumbotonHome"
import Quote from "../../../containers/organism/Qoute"
import Layout from "../Layout"

const LayoutCourse = ({children}) => {
    return ( 
        <div className="layout-course">
           <Layout>
               <JumbotronHome/>
               {children}
               <Quote/>
               <About/>
               <Footer/>
           </Layout>
       </div> 
     );
}
 
export default LayoutCourse;