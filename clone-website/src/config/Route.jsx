import Home from '../modules/home/pages/Home/index';
import Course from '../modules/course/pages/Course'
import LoginPage from '../modules/auth/pages/Login';
import SignUp from '../modules/auth/pages/Sign Up';
import CourseUpdate from '../modules/course/pages/CourseUpdate/CourseUpdate';
import CourseDetail from '../modules/course/pages/CourseDetail';
import CourseAdd from '../modules/course/pages/CourseAdd';

const Routes = [
    {
        path:'/',
        label:"Home",
        component: Home
    },
    {
        path:'/course',
        label:"Course",
        component: Course
    },
    {
        path:'/login',
        label:"Login",
        component: LoginPage
    },
    {
        path:'/signup',
        label:"Sign Up",
        component: SignUp
    },
    {
        path: "/course/create",
        label: "Course Create",
        component: CourseAdd,
    },
    {
        path:'/course/:id/update',
        label: "Course Update",
        component:CourseUpdate
    },
    {
        path:'/course/:id',
        label: "Course Detail",
        component:CourseDetail
    },
]
 
export default Routes;
