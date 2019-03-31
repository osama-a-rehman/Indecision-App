import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    if (!error) event.target.elements.option.value = "";

    this.setState(() => ({ error }));
  }

  // This should be defined in every class extending React.Component
  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">
            Add Option
          </button>
        </form>
      </div>
    );
  }
}
