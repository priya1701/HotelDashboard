import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" onClick={this.hideSidebar} />
          <SidebarCategory title="Layout" icon="layers">
            <button className="sidebar__link" onClick={this.props.changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button className="sidebar__link" onClick={this.props.changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="CheckIn" icon="diamond">
            <SidebarLink title="Add Guest" route="/checkIn/guest/add" onClick={this.hideSidebar} />
            <SidebarLink title="Guest List" route="/checkIn/guest/list" onClick={this.hideSidebar} />
            <SidebarLink title="Request for Blacklist" route="/checkIn/blacklist/request" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Manager" icon="diamond">
            <SidebarLink title="Guest List" route="/manager/guest/list" onClick={this.hideSidebar} />
            <SidebarLink title="Blacklist" route="/manager/blacklist/list" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Owner" icon="diamond">
            <SidebarLink title="Guest List" route="/owner/guest/list" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Area" icon="diamond">
            <SidebarLink title="Guest List" route="/area/guest/all" onClick={this.hideSidebar} />
            <SidebarLink title="Non-varified Guest" route="/area/guest/notvarified" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="City" icon="diamond">
            <SidebarLink title="Guest List" route="/city/guest/list" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="State" icon="diamond">
            <SidebarLink title="Guest List" route="/state/guest/list" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Country" icon="diamond">
            <SidebarLink title="Guest List" route="/country/guest/list" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
