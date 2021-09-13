import React from "react";
import { Component } from "react";
import { portfolioData } from '../../data/portfolioData';
import Project from "./project";

class PhotosNavigation extends Component {
    state={
        projects: portfolioData,
        radios: [
            {id: 1, value: "all"},
            {id: 2, value: "wedding"},
            {id: 3, value: "pregnant"},
            {id: 4, value: "baby"},
            {id: 5, value: "familly"},
            {id: 6, value: "baptism"},
            {id: 7, value: "couple"},
        ],
        selectedRadio: 'all'
    };

    handleRadio = (e) => {
        let radio = e.target.value;
        this.setState({selectedRadio: radio})
    }

    render(){
        let {projects, radios, selectedRadio} = this.state;

        return (
            <div className="photoNavigation">
                <ul className="radioDisplay">
                Catégories de photos:&#160;

                {
                    radios.map((radio) => {
                    return (
                        <li key={radio.id}>
                        <label htmlFor={radio.value}>{radio.value}
                            <input 
                            type="radio" 
                            name="radio" 
                            checked={radio.value === selectedRadio} 
                            value={radio.value}
                            id={radio.value}
                            onChange={this.handleRadio} />
                            <span className="checkmark"></span>
                        </label>
                        </li>
                    )
                    })
                }
                </ul>

                <div className="projects">{
                    projects
                    .filter(item => item.categories.includes(selectedRadio))
                    .map(item => {
                    return (
                        <Project
                        key={item.id}
                        item={item} />
                    )
                    })
                }
                </div>
            </div>
        )
    }
}

export default PhotosNavigation