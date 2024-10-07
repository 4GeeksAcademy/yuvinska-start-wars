import React  from "react";


const Card = ({name, id}) => {
    <div class="card" style= {{width: '18rem;'}}>
        <img src= {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg `} class="card-img-top" alt= {name} />
            <div class="card-body">
                <h5 class="card-title"> {name} </h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
    </div>

}
export default Card 



