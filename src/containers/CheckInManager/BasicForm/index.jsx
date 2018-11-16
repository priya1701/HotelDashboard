import React from 'react';
import { Container } from 'reactstrap';
import { translate } from 'react-i18next';
// import PropTypes from 'prop-types';
import TabsBorderedBottom from './components/TabsBorderedBottom';
// import HorizontalForm from './components/HorizontalForm';
// import ForeignerGuestForm from './components/VerticalForm';
// import showResults from './components/Show';

const BasicForm = () => (
  <Container>
    <TabsBorderedBottom />
  </Container>
);


export default translate('common')(BasicForm);
