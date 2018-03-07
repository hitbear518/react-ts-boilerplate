"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.generateString2 = () => {
            return "1";
        };
        this.state = { count: 0 };
    }
    componentDidMount() {
        this.interval = window.setInterval(() => this.setState(prevState => ({ count: prevState.count + 1 })), 200);
    }
    generateString1() {
        return "1";
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return React.createElement("span", null,
            this.state.count,
            " - ",
            this.generateString1(),
            " - ",
            this.generateString2());
    }
}
exports.default = Counter;
//# sourceMappingURL=Counter.js.map