import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../../../style/css/CardDetail.css";
import Grids from "../../../../components/Grid";
import CardListDetail from "../../../../containers/organism/CardListDetail";
import mountain from "../../../../assets/img/mountain.jpg";
import BadgeDetail from "../../../../components/BadgeDetail";
import Layout from "../../../../containers/templates/Layout";

const CourseDetail = () => {
  const [postDetail, setPostDetail] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const params = useParams();
  const getPostDetail = async (postId) => {
    setIsPending(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPostDetail(res.data);
      setIsPending(false);
    } catch (error) {}
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, [params.id]);
  return (
    <Layout>
      {isPending === true && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {postDetail && (
        <Grids containerType="container">
          <Grids row="row d-flex justify-content-center" idGrid="ads">
            <Grids gridColumns="col-md-4">
              <CardListDetail
                titleTop="React"
                yearCourse="2021"
                imageCard={mountain}
                headCourse={postDetail.title}
                body={postDetail.body}
              >
                <BadgeDetail spesifikasi="Front-end" />
                <BadgeDetail spesifikasi="Javascript" />
                <BadgeDetail spesifikasi="SPA" />
              </CardListDetail>
            </Grids>
          </Grids>
        </Grids>
      )}
    </Layout>
  );
};

export default CourseDetail;
