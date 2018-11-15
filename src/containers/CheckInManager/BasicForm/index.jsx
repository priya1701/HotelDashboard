import React from 'react';
import { Container, Row } from 'reactstrap';
import { translate } from 'react-i18next';
// import PropTypes from 'prop-types';
import HorizontalForm from './components/HorizontalForm';
// import VerticalForm from './components/VerticalForm';
import showResults from './components/Show';

const BasicForm = () => (
  <Container>
    <Row>
      <HorizontalForm onSubmit={showResults} />
    </Row>
  </Container>
);


export default translate('common')(BasicForm);
