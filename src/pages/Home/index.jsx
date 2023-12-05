import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Button } from "@radix-ui/themes";
import "./home.module.css";

export const Home = () => {
    return (
        <>
            <Navbar />
            <section className="home__hero">
                <h1 className="hero__title">Welcome to Wizstack</h1>
                <p className="hero__description">A solution for students who are looking to organize their studying workflow.</p>
                <Button className="hero__button" variant="primary">Get Started</Button>
            </section>

            <section className="home__about">
                <h2 className="about__title">What is Wizstack?</h2>
            </section>

            <section className="home__product">
                <h2 className="product__title">Using our Dashboard</h2>
                <p className="product__description">
                    As a student, using our dashboard will help you organize your studying workflow.
                    You are able to keep track of your assignments, check your schedule using a calendar,
                    and shuffle through any course materials you have uploaded.
                </p>
                <Button className="product__button" variant="primary">Learn More</Button> 
            </section>
            <Footer />
        </>
    );
};