import React from "react";
import "./Detail.css";

//class 컴포넌트로 만드는이유는, 컴포넌트의 state가 없는 상황을 대비하기 때문에 state가 undefined가 되면 redirect 할 수 있도록. state를 가지는 클래스 컴포넌트를 만든다.
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props
        if(location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        const state = location.state;
        if(state) {
            return (
                <div className="Container">
                    <div className="Detail__container">
                        <img src={state.poster} alt={state.title}></img>
                        <div className="Detail__data">
                            <h1 className={state.title}> 영화 제목 : "{ state.title} "</h1>
                            <h3 className={state.genres}> 영화 장르 : "{ state.genres}     "</h3>
                            <h4 className={state.summary}> 줄거리 요약 : "{ state.summary} "</h4>
                        </div>
                    </div>
                </div>
            )
        }else {
            return null;
        }
    }
}
export default Detail;