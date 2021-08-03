import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';
import Button from '../Button/Button';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChange = e => {
    this.setState({ searchValue: e.currentTarget.value.toLowerCase() });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchValue.trim() === '') {
      toast('Please type something');
      return;
    }
    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.onSubmit}>
          <input
            className={s.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchValue}
            onChange={this.onChange}
          />
          <Button type="submit">Search</Button>
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar;
