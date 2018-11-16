import React, { PureComponent } from 'react';
import { Card, CardBody, Col, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
// import { translate } from 'react-i18next';
// import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
import HorizontalForm from './HorizontalForm';
import ForeignerGuestForm from './ForeignerGuestForm';
import showResults from './Show';


class TabsBorderedBottom extends PureComponent {
  // static propTypes = {
  //   t: PropTypes.func.isRequired,
  // };

  constructor() {
    super();
    this.state = {
      activeTab: '1',
    };
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  render() {
    // const { t } = this.props;

    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className="tabs tabs--justify tabs--bordered-top">
              <div className="tabs__wrap">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Indian
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      Foreigner
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <HorizontalForm onSubmit={showResults} />
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <ForeignerGuestForm onSubmit={showResults} />
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default (TabsBorderedBottom);

