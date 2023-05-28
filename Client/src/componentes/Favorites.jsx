import { useSelector } from "react-redux";
import { Card } from "./Card";

const Favorites = () => {
    const fav = useSelector((state) => state.characters);
    return (
        <div>
            {
                fav.map((props) => props.favorite ? <Card key={props.id} props={props} /> : null)
            }
        </div>
    );
};

export { Favorites }