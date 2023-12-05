import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import "./home.module.css";

export const Home = () => {
    return (
        <>
            <Navbar />
                <div className="home">
                    <div className="home__content">
                        <h1>WizStack</h1>
                        <h2>WizStack is a solution for students who want to optimize their studying potential</h2>
                        <Link to="/src/components/SignUp/SignUp.jsx">
                            <Button>Sign Up Now</Button>
                        </Link>
                    </div>
                </div>

                <div className="home__about">
                    <h1>What is WizStack?</h1>
                    <h2>
                        Wizstack provides a dashboard solution for students who are looking to make the most impact on their studying
                    </h2>
                </div>

                <div className="home__features">
                    <h1>Features</h1>
                    <h2>WizStack provides a number of features to help you study more efficiently</h2>
                    <div className="home__features__cards">
                        <div className="home__features__card">
                            <h3>Study Timer</h3>
                            <p>WizStack provides a timer to help you study more efficiently</p>
                        </div>
                        <div className="home__features__card">
                            <h3>Study Timer</h3>
                            <p>WizStack provides a timer to help you study more efficiently</p>
                        </div>
                        <div className="home__features__card">
                            <h3>Study Timer</h3>
                            <p>WizStack provides a timer to help you study more efficiently</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
};