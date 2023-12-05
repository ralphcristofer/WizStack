import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Button } from "@radix-ui/themes";
import "./home.module.css";

export const Home = () => {
    return (
        <>
            <Navbar />
            <section className="home__hero">
                <h1>Welcome to Wizstack</h1>
                <p>A solution for students who are looking to organize their studying workflow.</p>
                <Button variant="primary">Get Started</Button>
            </section>

            <section className="home__about">
                <h2>What is Wizstack?</h2>
            </section>

            <section className="home__product">
                <h2>Using our Dashboard</h2>
                <p>
                    As a student, using our dashboard will help you organize your studying workflow.
                    You are able to keep track of your assignments, check your schedule using a calendar,
                    and shuffle through any course materials you have uploaded.
                </p>
                <Button variant="primary">Learn More</Button> 
            </section>
            <Footer />
        </>
    );
}