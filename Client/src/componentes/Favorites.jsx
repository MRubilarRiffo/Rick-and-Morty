import { useSelector } from "react-redux";
import { Card } from "./Card";

const Favorites = () => {
    const fav = useSelector((state) => state.favorite);

    return (
        <div>
            {
                fav.map((props) => <Card key={props.id} props={props} />)
            }
        </div>
    );
};

export { Favorites }