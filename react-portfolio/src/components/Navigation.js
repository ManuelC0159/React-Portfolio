import React from "react";

function Navigation() {
    const tabs = ["About me" , "Portfolio", "Contact", "Resume"];
    return(
        <div>
            <ul>
                {tabs.map((tab) =>{
                    <li key = {tab}>
                        <a>
                            {tab}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Navigation;