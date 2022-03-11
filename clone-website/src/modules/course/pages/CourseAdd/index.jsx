import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CourseForm from "../CourseForm";
import Grids from "../../../../components/Grid";
import Layout from "../../../../containers/templates/Layout";

const CourseAdd = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const createPost = (titleVal, bodyVal) => {
    setLoading(true);
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: titleVal,
          body: bodyVal,
          userId: 1,
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
        history.push("/");
      })
      .catch((err) => {
        console.log("error", err);
        setLoading(false);
      });
  };
  return (
      <Layout>
        <Grids containerType="container">
          <Grids row="row"  display="d-flex" justify="justify-content-center">
            <Grids gridColumns="col-md-6">
              <h1 className="text-center mt-5 mb-3" >Create</h1>
              <CourseForm
                isUpdate={false}
                title={title}
                onTitleChange={setTitle}
                body={body}
                onBodyChange={setBody}
                onSubmit={() => createPost(title, body)}
              />
            </Grids>
            {loading && <div>Loading</div>}
          </Grids>
        </Grids>
      </Layout>
  );
};

export default CourseAdd;
