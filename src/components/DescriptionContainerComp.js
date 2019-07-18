import React from "react"
import DescriptionContainerTextComp from "./DescriptionContainerTextComp"
import DescriptionContainerImageComp from "./DescriptionContainerImageComp"


class DescriptionContainerComp extends React.Component{
componentSelector(props){

  if(this.props.info.content === "text"){
    return (
    <DescriptionContainerTextComp
    text={{
      title: this.props.info.title,
      description: this.props.info.description,
    }}
    />
    )
  }
  else{
    return(
     <DescriptionContainerImageComp />
    )
  }

}
  render(props){
    console.log(this.props)
    let myStyle = {
      backgroundColor: this.props.info.preferance ? "#fff" : "#edf2f7"
    }
    return(
      <section className="w-100 p-6 bg-gray-100" style={myStyle}>

        {this.componentSelector()}

      </section>
    )
  }
}

export default DescriptionContainerComp
