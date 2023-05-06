import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisble, setHide }) => {

    return (
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isVisible ? (
                <button
                    onClick={() => setHide()}
                    className="cursor-pointer underline"
                >Hide</button>) : (
                <button
                    onClick={() => setIsVisble()}
                    className="cursor-pointer underline"
                >Show</button>)
            }

            {isVisible && <p>{description}</p>}
        </div>
    )
}
// lifting the state up

const InstaMart = () => {
    const [isVisibleSection, setIsVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About"}
                description={"This is the about section of Instamart.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                isVisible={isVisibleSection === "about"}
                setIsVisble={() => setIsVisibleSection("about")}
                setHide={() => setIsVisibleSection("")}


            />

            <Section
                title={"Team Instamart"}
                description={"This is the team section of Instamart. The team has 50 members...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                isVisible={isVisibleSection === "Team Instamart"}
                setIsVisble={() => setIsVisibleSection("Team Instamart")}
                setHide={() => setIsVisibleSection("")}
            />
            <Section
                title={"Career"}
                description={"This is the career section of Instamart. The team has 50 members & we are expanding...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
                isVisible={isVisibleSection === "Career"}
                setIsVisble={() => setIsVisibleSection("Career")}
                setHide={() => setIsVisibleSection("")}
            />
        </div>
    );
};

export default InstaMart;