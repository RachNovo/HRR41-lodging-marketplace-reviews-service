import React, {Component} from 'react';
import Beginning from './Views/Beginning.jsx';
import End from './Views/End.jsx';
import Mid from './Views/Mid.jsx';
import styles, {right, left, selectedStyle, number, elipses} from './ViewSelector.css'

class CurrentViewSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    var views = Math.ceil(this.props.reviewCount / 7);
    var selected = this.props.selected;
    var currentView = this.props.currentView;
    if (views >= 6 || (views === 5 && selected < 4) || (views === 4 && selected < 3)) {
      //renders the pattern for ViewSelector for the majority of cases
      var Component;
      if (selected <= 4) {
        Component = Beginning;
      } else if (selected >= (views - 3)) {
        Component = End;
      } else  if (selected > 4 && selected < (views - 3)) {
        Component = Mid;
      }
      return <Component selected={selected} currentView={currentView} views={views}/>
    } else if (views > 1) {
      //creates the ViewSelector edge cases
      var array = [];
      for (var i = 1; i <= views; i++) {
        if (i === selected) {
          array.push(<span className={selectedStyle} key={Math.random()}>{i}</span>);
        } else {
          array.push(<span className={number} onClick={currentView.bind(null, i)} key={Math.random()}>{i}</span>);
        }
      }
      if (selected !== 1) {
        array.unshift(<span className={number} onClick={currentView.bind(null, selected - 1)} key={Math.random()}><img className={left} src='https://rachels-review-bucket.s3.amazonaws.com/Left.png'></img></span>);
      }
      if (selected !== views) {
        array.push(<span className={number} onClick={currentView.bind(null, selected + 1)} key={Math.random()}><img className={right} src='https://rachels-review-bucket.s3.amazonaws.com/Right.png'></img></span>);
      }
      return (
        <div>
          {array}
        </div>
      )
    }
    return <div></div>
  }
}

export default CurrentViewSelect;
