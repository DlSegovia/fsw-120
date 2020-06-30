import React from 'react';
class Square extends React.Component {
    constructor(props){
        super(props)
        this.state={
            index:3
        }
    }
       render() {

        return (
        <div>
            <div className="square" style={{backgroundColor: this.props.color}}></div>
        </div>
        )
    }
}
export default Square;