import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Topbar from '../topbar/Topbar';
import SidebarCountry from './SidebarCountry';

import { changeThemeToDark, changeThemeToLight } from '../../../redux/actions/themeActions';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '../../../redux/actions/sidebarActions';
import { SidebarProps } from '../../../shared/prop-types/ReducerProps';

class LayoutCountry extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
  };

  changeSidebarVisibility = () => {
    this.props.dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    this.props.dispatch(changeMobileSidebarVisibility());
  };

  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
  };

  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
  };

  render() {
    const layoutClass = classNames({
      layout: true,
      'layout--collapse': this.props.sidebar.collapse,
    });

    return (
      <div className={layoutClass}>
        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
        />
        <SidebarCountry
          sidebar={this.props.sidebar}
          changeToDark={this.changeToDark}
          changeToLight={this.changeToLight}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  sidebar: state.sidebar,
}))(LayoutCountry));
