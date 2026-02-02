import Course from "./Course";
import useFetch from "./useFetch";

function Courselist() {

  const [courses, error, setData] = useFetch("http://localhost:3000/courses");

  if (!courses) {
    return (
      <>
        {!error && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "60vh" }}
          >
            <div className="spinner-border" role="status"></div>
          </div>
        )}
        {error && <p className="text-center text-danger">{error}</p>}
      </>
    );
  }

  function handleDelete(courseindex) {
    const newCourses = courses.filter((course, index) => index !== courseindex)
    setData(newCourses)
  }





  return (

    <>
      <div className="container my-5 mt-2">
        <h2 className="text-center">Our valuable Courses</h2>

        <div className="row g-4 justify-content-center">
          {courses.map((course, index) => (
            <Course
              key={index}
              name={course.name}
              content={course.content}
              price={course.price}
              img={course.img}
              delete={() => handleDelete(index)}

            />
          ))};
        </div>
      </div>
    </>
  );
}

export default Courselist;
