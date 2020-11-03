import React, { useState } from 'react';

const PersonCard = (props) => {
    const {lastName, firstName, age, hairColor} = props;

    const[birthday, setBirthday] = useState(age);

    const onClickHandler = () => {
        setBirthday(birthday + 1);
    }

    return(
        <div className="card container col-4 mt-1">
            <div className="card-body">
                <h4>{lastName}, {firstName}</h4>
                <h6>Age: {birthday}</h6>
                <h6>Hair Color: {hairColor}</h6>

                <button className="btn btn-success" onClick={onClickHandler}>Birthday</button>
            </div>
        </div>
        )
}

export default PersonCard;