import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { RootState, CounterState } from './reducers';
import { increment, decrement, incrementAsync } from './actions';

interface HomeStateProps {
  count: CounterState;
}

interface HomeDispatchProps {
  increment: typeof increment;
  decrement: typeof decrement;
  incrementAsync: typeof incrementAsync;
}

interface HomeOwnProps {
  foo?: string;
}

type HomeProps = HomeStateProps & HomeDispatchProps & HomeOwnProps;

class Home extends React.Component<HomeProps> {
  async componentDidMount() {
    let a = await this.props.incrementAsync();
  }

  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <div>{String(this.props.foo)}</div>
        <Counter
          value={count}
          onIncrement={increment}
          onDecrement={decrement}
        />
        <Counter
          value={count}
          onIncrement={this.props.incrementAsync}
          onDecrement={decrement}
        />
      </div>
    );
  }
}

export default connect<HomeStateProps, HomeDispatchProps, HomeOwnProps>(
  (state: RootState, ownProps: HomeOwnProps) => ({
    count: state.count,
    foo: ownProps.foo,
  }),
  {
    increment,
    decrement,
    incrementAsync,
  },
)(Home);
