import Testimonail from "./Testimonail";
import useFetch from "./useFetch";


const TestimonialList = () => {
  const [data, error] = useFetch(
    "http://localhost:3000/testimonials"
  );



 
  if (!data) {
  return (
    <>
      {!error && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="spinner-border text-success" role="status"></div>
        </div>
      )}
      {error && <p className="text-center text-danger">{error}</p>}
    </>
  );
}


  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">What Our Students Say</h2>

      <div className="row g-4">
        {data.map((item) => (
          <Testimonail
            key={item.id}
            name={item.name}
            role={item.role}
            rating={item.rating}
            image={item.img}
            message={item.message}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;