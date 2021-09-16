import React, { Component } from "react";

class Project extends Component {
    state = {
      showInfo: false
    }
  
    handleInfo = () => {
      this.setState({
        showInfo:!this.state.showInfo
      })
    }
  
  
    render() {
      let {picture} = this.props.item;
  
      return (
          <>
            <img src={picture} alt="imgage-gallery" onClick={this.handleInfo} className="imgGallery"/>
          </>
  
      );
    }
  }
  
  export default Project;
  