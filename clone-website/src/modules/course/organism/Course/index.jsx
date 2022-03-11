import Slider from "react-slick";
import CardsCourse from "../CardCourse";
import Grids from "../../../../components/Grid";
import TitleCourse from "../../../../containers/organism/TitleCourse";
import mountain from '../../../../assets/img/rocket.jpg'
import { useState, useEffect } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const Course = () => {
  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [active, SetActive] = useState(0);
  const history = useHistory();
  const getPost = () => {
    setIsPending(true)
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(result.data);
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts((res) => {
          SetActive(0)
          let newData = [...res];
          newData.splice(id, 1);
          return newData;
        });
      })
      .catch((err) => {
        SetActive(0)
        console.log(err);
      });
  };
  useEffect(() => {
    getPost();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div>
      <Grids display="d-flex" margin="mt-5">
      <TitleCourse title="Course" description="Read More &rarr;" />
      </Grids>
      <Slider {...settings}>
        {isPending && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}

        {!isPending && posts.map((post) => (
          <CardsCourse key={post.id} title={post.title} body={post.body} picture={mountain} handleDelete={() => {
            handleDelete(post.id);
            SetActive(post.id)
          }}
          onEdit={() => history.push(`/course/${post.id}/update`)}
          onDetail={() => history.push(`/course/${post.id}`)}
          onCreate={() => history.push(`/course/create`)}
          isPending={active === post.id ? true : false}
          />
        ))}

      </Slider>
    </div>
  );
}

export default Course;