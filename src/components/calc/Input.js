import React, { Component } from 'react';

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width : 0,
            className : props.className,
            startUp : true
        };
    }

    handleChange(evt) {
        if (this.props.onChange) {
            this.props.onChange(evt);
        }
    }

    realUpdateWidth() {
        var width = this.testElem.offsetWidth;
        if (Math.abs(this.state.width - width) > 2) { // sometimes it seems to be a few pixels off
            this.setState({
                width: width + 1
            });
        }
    }

    updateWidth() {
        if (this.state.startUp) {
            setTimeout(() => { // wow, seems to be correct: http://stackoverflow.com/a/34999925/5627599
                window.requestAnimationFrame(() => {
                    this.realUpdateWidth();
                });
            }, 0);
        } else {
            this.realUpdateWidth();
        }
    }

    componentDidMount() {
        this.updateWidth();
        setTimeout(() => { // wow, seems to be correct: http://stackoverflow.com/a/34999925/5627599
            window.requestAnimationFrame(() => {
                this.setState({
                    startUp : false
                });
            });
        }, 0);
    }

    componentDidUpdate() {
        this.updateWidth();
    }

    focussed() {
        this.elem.select();
    }

    focus() {
        this.elem.focus();
    }

    render(){
        var inputStyle = {
            width : this.state.width
        };
        return (
            <span>
                <span className={"testSpan " + this.props.className} ref={(c) => {this.testElem = c}}>{this.props.value}</span>
                <input type="text" className={"variableSize " + this.props.className}
                       value={this.props.value} style={inputStyle}
                       onFocus={this.focussed.bind(this)}
                       ref={(c) => {this.elem = c}} onChange={this.handleChange.bind(this)} />
            </span>
        );
    }
};