import React from 'react';

type CounterProps = {
  value: number;
  onIncrement: () => any;
  onDecrement: () => any;
};

class Counter extends React.Component<CounterProps, {}> {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <p>
        Clicked: {value} times <button onClick={onIncrement}>+</button>{' '}
        <button onClick={onDecrement}>-</button>{' '}
      </p>
    );
  }
}
export default Counter;
