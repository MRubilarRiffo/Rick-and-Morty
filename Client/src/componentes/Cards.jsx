import "./Cards.css"
import { Card } from "./Card";
import { useSelector } from "react-redux";

const Cards = () => {
    const char = useSelector((state) => state.characters);
    return (
        <div className="Cards">
            {
                char.map((props) => <Card key={props.id} props={props} />)
            }
        </div>
    );
};

export { Cards };