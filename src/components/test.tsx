import {observable} from "mobx";
import React from "react";

class Store{
    @observable openScenarioForm: boolean = false;
}

const store = new Store();

const Obtain: React.FC<string> = () => {
    return(
        <div>
            안녕하세요
        </div>
    );
}

export default Obtain;