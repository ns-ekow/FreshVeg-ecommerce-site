import styled from "styled-components";
import NewsCard from '../components/newscard';
import Layout from "../components/layout";

const FAQ = () => {
    return (
        <>
            <Layout>
                <FaqStyled>
                    <div className="faqs">
                        <div className="left-col">
                            <h1>Welcome, let&apos;s talk about our freshVegs</h1>
                            <div className="dropdowns">
                                <div className="dropdown"></div>
                            </div>
                        </div>
                        <div className="right-col"></div>
                    </div>
                    <div className="news">
                        <h2>Latest News</h2>

                        <div className="card-container">
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                        </div>
                    </div>
                </FaqStyled>
            </Layout>
            
        </>
    );
};

const FaqStyled = styled.main`
    width: 100%;
    height: 100vh;
    /* background: green; */
    padding: 0 5rem;

    .faqs {
        width: 100%;
        height: 400px;
        /* background: blue; */
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        

        
        .right-col {
            background: red;
        }
    }

    .card-container {
        display: flex;
        gap: 1rem;
        
    }

    .news{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        
    }
`;

export default FAQ;
