import "./Card.css"
import { AiFillDelete, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { eliminarCharUI, addFavorite } from "../redux/actions";

const Card = ({props}) => {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="card front">
                <div className="divImg">
                    <img src={props.image} alt="" />
                </div>
                <h1>{props.name}</h1>
                
            </div>
            <div className="card back">
                <p>Id: "{props.id}"</p>
                <p>Status: "{props.status}"</p>
                <p>Species: "{props.species}"</p>
                <p>Gender: "{props.gender}"</p>
                <p>Origin: "{props.origin.name}"</p>
                <div>
                    <button className="btn" onClick={() => dispatch(eliminarCharUI(props.id))}>
                        <AiFillDelete />
                    </button>
                    <button className="btn" onClick={() => dispatch(addFavorite(props.id))}>
                        <AiFillHeart />
                    </button>
                </div>
            </div>
        </div>
    );
};

export { Card };