import React from "react";
import io from "../Images/io_logo.jpg";
import Courselist from "./Courselist";
import TestimonialList from "./TestimonialList";
import Login from "./Login";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
       
        <div className="container my-5">

            <div className="text-center mb-5">
                <img
                    src={io}
                    alt="Company Logo"
                    height={80}
                    className="rounded-circle mb-3"
                />
                <h1 className="fw-bold">Welcome to Code io</h1>
                <p className="text-muted">
                    Building modern, reliable, and user-friendly digital solutions
                </p>
            </div>

            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3 className="fw-bold">Who We Are</h3>
                    <p>
                        Code io is a technology-driven company focused on creating
                        high-quality web applications and digital products. We believe in
                        clean design, efficient code, and great user experience.
                    </p>
                </div>

                <div className="col-md-6 mb-4">
                    <h3 className="fw-bold">What We Do</h3>
                    <p>
                        We specialize in web development, UI/UX design, and modern frontend
                        technologies. Our goal is to help businesses grow by turning ideas
                        into powerful digital solutions.
                    </p>
                </div>
            </div>

            <div className=" p-4 border rounded bg-light">
                <h3 className="fw-bold text-center">Our Mission</h3>
                <p className="text-center">
                    Our mission is to deliver simple, scalable, and impactful technology
                    solutions that empower businesses and individuals worldwide.

                </p>
            </div>

            <div className="mt-2 d-flex justify-content-center">
                <Link to = "/courses" className = "btn btn-outline-success">
                    Read More..
                </Link>
            </div>

        </div>
        <Courselist/>
        <TestimonialList/>
        <Login/>
         </>
    );
};

export default Home;
