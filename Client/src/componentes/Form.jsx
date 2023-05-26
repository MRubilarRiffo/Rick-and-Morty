import { useState } from "react";
import validation from "./validation";
import "./Form.css"

const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }));
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    };

    return (
        <div className="form">
            <form>
                <label htmlFor="email">Email: </label>
                <input 
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                {errors.e1 ? 
                    (<p>{errors.e1}</p>) :
                    errors.e2 ? 
                    (<p>{errors.e2}</p>) :
                    (<p>{errors.e3}</p>)
                }
                <hr />

                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password" 
                    value={userData.password}
                    onChange={handleChange}
                />
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
                <button type="SUBMIT" onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    );
};

export { Form };