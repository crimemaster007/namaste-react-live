import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 0,
        };
        console.log("constructor")
    }

    componentDidMount() {
        console.log("compponentdimount")
    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>name :{this.props.name}</h2>
                <h2>Count :{this.state.count}</h2>
                <h2>Count2 :{this.state.count2}</h2>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1

                        })
                    }}
                >Count</button>
            </div>
        )
    }
}

export default ProfileClass;