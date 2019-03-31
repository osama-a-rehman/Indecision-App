import React from "react";

import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    isOpen: false
  };

  // Shorthand Syntax: To implicitly return an object from an Arrow Function,
  // surround object {} with (), i.e () => ({ objectProps });
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = optionToRemove => {
    console.log("handleDeleteOption, option", optionToRemove);

    this.setState(prevState => ({
      options: prevState.options.filter(option => option !== optionToRemove)
    }));
  };

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];
    // alert(option);

    this.setState(() => ({
      selectedOption: option,
      isOpen: true
    }));
  };

  handleAddOption = newOption => {
    console.log("newOption", newOption);

    if (!newOption) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(newOption) > -1) {
      return "This option already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat(newOption)
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ isOpen: false }));
    setTimeout(() => {
      this.setState(() => ({ selectedOption: undefined }));
    }, 200);
  };

  /* LIFE CYCLE METHODS */
  componentDidMount() {
    console.log("componentDidMount()");
    console.log("Fetching Data");

    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
    console.log("Saving Data");

    // console.log(prevProps);
    // console.log(prevState);

    // BECAUSE componentDidUpdate is called even when options array is set to new empty array
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount()");
  }

  // This should be defined in every class extending React.Component
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          isOpen={this.state.isOpen}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
