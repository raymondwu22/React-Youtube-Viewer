// exporting modules, classes, state
import React, { Component } from 'react';

// Functional Component Example:
// Only to render JSX. NO STATE.
// const SearchBar = () => <input />;

// Class Component Example:
// Good for keeping track of state
class SearchBar extends Component {
  // state is an object on a JS Component that keeps track
  constructor(props) {
    super(props);
    // e.g. search 'term'
    this.state = { term: '' };
    // this.onInputChange = this.onInputChange.bind(this);
  }

  // every class based component needs render()
  render() {
    return (
      <div className="search-bar">
        {/* } Controlled Components have their values changed by state. */}
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // event handler
  onInputChange(term) {
    // when state updates, the component re-renders
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
