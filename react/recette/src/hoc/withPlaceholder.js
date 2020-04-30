import React, {Component} from "react"

const withPlaceholder = WrappedComponenet => (
  class HOC extends Component{
    render() {
      return (
        <WrappedComponenet placeholder="Mon HOC" {...this.props} />
      )
    }
  }
)
export default withPlaceholder;
