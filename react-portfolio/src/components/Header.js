import React, {useState} from "react";
import Navigation from "./Navigation";
import About from "./About";
//import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header(){
    const [currentPage, handlePageChange] = useState("About");

    const renderPage= () =>{
        switch(currentPage){
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    };

    return(
        <div>
            <nav>
                <div>
                    <a href = "https://github.com/ManuelC0159">
                        <span>Manuel Camacho</span>
                    </a>
                </div>
            </nav>
            <Navigation currentPage ={currentPage} handlePageChange = {handlePageChange}></Navigation>
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    )
}

export default Header;