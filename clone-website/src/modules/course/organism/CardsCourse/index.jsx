import CardCoursePage from "../../containers/organism/CardCoursePage";
import CategoryCard from "../../../../containers/organism/CategoryCard"
import Grids from '../../containers/organism/Grid/index';
import foto from '../../assets/img/rocket.jpg'
import Pagination from "../../../../containers/organism/PaginationCourse";
const CardCourse = () => {
    const dataCategory = [
        {id: 1, title: 'Development'},
        {id: 2, title: 'Invesment'},
        {id: 3, title: 'Business'},
        {id: 4, title: 'Cyber Security'},
    ]
    const dataCard = [
        {id: 1, title: 'ini adalah judul', desc:'lampung dev', price:'Rp300.000,-'},
        {id: 2, title: 'ini adalah judul', desc:'lampung dev', price:'Rp300.000,-'},
        {id: 3, title: 'ini adalah judul', desc:'lampung dev', price:'Rp300.000,-'},
        {id: 4, title: 'ini adalah judul', desc:'lampung dev', price:'Rp300.000,-'},
    ]
    return ( 
        <div className="category">
            <p className="text-center my-4">Category</p>
            <Grids display="d-flex" flexDirection="flex-row" justify="justify-content-center">
                {dataCategory.map(category => <CategoryCard key={category.id} title={category.title}/>)}
            </Grids>
            <Grids containerType="container-fluid" margin="mt-5">
                <Grids row="row">
                    <Grids gridColumns="col-md-12" display="d-flex">
                        {dataCard.map(card => <CardCoursePage key={card.id} title={card.title} description={card.desc} price={card.price} foto={foto}/>)}   
                    </Grids>
                    <Grids gridColumns="col-md-12" display="d-flex">
                        {dataCard.map(card => <CardCoursePage key={card.id} title={card.title} description={card.desc} price={card.price} foto={foto}/>)}   
                    </Grids>
                </Grids>
                <Pagination/>
            </Grids>            
        </div>
     );
}
 
export default CardCourse;