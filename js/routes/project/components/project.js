import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { increment, decrement } from 'reducers/increment';

const Project = ({
  increment: inc,
  decrement: dec,
  numbers
}) => {
  return (
    <div>
      <h2>Project</h2>
      <RaisedButton
        onClick={inc}
        label='Increment'
      />
      <RaisedButton
        onClick={dec}
        label='Decrement'
      />
      <p>
        {numbers.value}
      </p>
    </div>
  );
};

const mapDispatchToProps = {
  increment,
  decrement
};
const mapStateToProps = state => ({
  numbers: state.numbers
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
