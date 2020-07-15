import React from "react";
import "./Detail.css";

//class 컴포넌트로 만드는이유는, 컴포넌트의 state가 없는 상황을 대비하기 때문, state가 undefined가 되면 redirect 할 수 있도록.
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props
        if(location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return <div className="Detail__title">
                <span> Movie's title is a "{ location.state.title}"</span>
            </div>
        }else {
            return null;
        }
        
    }
}


export default Detail;