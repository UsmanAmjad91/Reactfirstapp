import React from "react";

export default class Props extends React.Component {

    render(){
        return(
            <div>
                <h6>
                    Class Component Props {this.props.data}
                </h6>
                <h4> {this.props.text.name} </h4>
            </div>
        )
    }
}