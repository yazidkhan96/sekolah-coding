import Grids from "../../../../components/Grid";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import CourseForm from "../CourseForm";
import Layout from "../../../../containers/templates/Layout";

const CourseUpdate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [postDetail, setPostDetail] = useState([]);
  const params = useParams();

  const updatePost = (titleVal, bodyVal, postId) => {
    setLoading(true);
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title: titleVal,
          body: bodyVal,
          userId: 1,
          id: postId,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        history.push("/posts");
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };

  const getPostDetail = async (PostId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${PostId}`
      );
      setPostDetail(res.data);
      setTitle(res.data.title);
      setBody(res.data.body);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, [params.id]);
  return (
    <Layout>
      <Grids containerType="container">
        <Grids row="row" display="d-flex" justify="justify-content-center">
          <Grids gridColumns="col-md-7">
            <h1 className="text-center mt-5 mb-3">Update</h1>
            {postDetail && (
              <CourseForm
                isUpdate={true}
                title={title}
                onTitleChange={setTitle}
                body={body}
                onBodyChange={setBody}
                onSubmit={() => updatePost(title, body, params.id)}
              />
            )}
          </Grids>
          {loading && <div>Loading</div>}
        </Grids>
      </Grids>
    </Layout>
  );
};

export default CourseUpdate;
