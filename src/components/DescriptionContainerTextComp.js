import React from "react"

class DescriptionContainerTextComp extends React.Component{
  render(){
    return(
      <div className="text-center p-4">
        <h2 className="font-normal text-5xl pb-4" style={{color: "#202a34"}}>{this.props.text.title}</h2>
        <p className="text-center font-hairline text-2xl p-4">{this.props.text.description}</p>
      </div>
    )
  }
}

export default DescriptionContainerTextComp
