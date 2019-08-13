import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel : number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export default class Home extends React.Component<Props> {

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join('!');
    }

    render() {
        if (this.props.enthusiasmLevel <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }
        return (
            <div className="hello">
                <div className="greeting">
                    Hello {this.props.name + this.getExclamationMarks(this.props.enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        );
    }
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}