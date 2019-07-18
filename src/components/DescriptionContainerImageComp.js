import React from "react"

class DescriptionContainerImageComp extends React.Component{
  render(){
    return(
      <div style={{display: "flex", height: "100%", width: "100%"}}>

        <article className="p-4	w-1/2">
          <div className="text-center">
            <img className="h-56 m-auto" src="http://hawkinsdigitalcreative.com/images/banner-dev.svg" />
            <p className="font-hairline text-2xl p-4">Hawkins DC specialises in the development of standard and rich media ads. The ads we build work across a variety of platforms and are built to be production friendly.</p>
          </div>
        </article>

        <article className="p-4 w-1/2">
            <div className="text-center">
              <img className="h-56 m-auto" src="http://hawkinsdigitalcreative.com/images/web-dev.svg" />
                <p className="font-hairline text-2xl p-4"> We build fully responsive websites, landing pages, and animated infographics. We are constantly keeping up with the latest trends to ensure we develop the best possible work.</p>
            </div>
        </article>

      </div>
    )
  }
}

export default DescriptionContainerImageComp
