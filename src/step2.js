import React from 'react';

export class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.fieldName = 'step2';
    this.state = props.values.step2;
  }

  handleNext = () => {
    const { goNext } = this.props;
    const { value } = this.state;
    const data = { [this.fieldName]: { value } };
    goNext(data);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.fieldName = name;
    this.setState({ value });
  };

  render() {
    const { goBack } = this.props;

    return (
      <div className="App-intro">
        <form>
          <div className="form-group mt-2">
            <input
              name="step2"
              value={this.state.value}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              placeholder="Enter something"
              autoComplete="off" />
          </div>
          <button type="button" onClick={goBack} className="btn btn-secondary mr-3">Back</button>
          <button type="button" onClick={this.handleNext} className="btn btn-secondary">Next</button>
        </form>
      </div>
    );
  }
}

