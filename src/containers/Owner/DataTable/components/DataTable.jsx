/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Container, Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
// import { Field } from 'redux-form';
import EditTable from '../../../../shared/components/table/EditableTable';
import Pagination from '../../../../shared/components/pagination/Pagination';
import renderSelectField from '../../../../shared/components/form/Select';

class DataTable extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.heads = [
      {
        key: 'id',
        name: '#',
        width: 80,
      },
      {
        key: 'first',
        name: 'First Name',
        sortable: true,
      },
      {
        key: 'last',
        name: 'Last Name',
        sortable: true,
      },
      {
        key: 'user',
        name: 'Username',
        sortable: true,
      },
      {
        key: 'age',
        name: 'Age',
        sortable: true,
      },
      {
        key: 'date',
        name: 'Date',
        sortable: true,
      },
      {
        key: 'location',
        name: 'Location',
        sortable: true,
      },
      {
        key: 'work',
        name: 'Work',
        sortable: true,
      },
    ];

    this.state = {
      rows: this.createRows(23),
      pageOfItems: [],
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  createRows = (numberOfRows) => {
    const rows = [];
    for (let i = 1; i < numberOfRows + 1; i += 1) {
      rows.push({
        id: i,
        first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        last: ['Morisson', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        age: Math.min(100, Math.round(Math.random() * 30) + 20),
        date: this.getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))],
      });
    }
    return rows;
  };

  render() {
    const { handleSubmit, reset } = this.props;

    return (
      <Container>
        <Row>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">Branch</span>
              <div className="form__form-group-field">
                <Field
                  name="Nationality"
                  component={renderSelectField}
                  options={[
                    { value: 'India', label: 'India' },
                    { value: 'US', label: 'America' },
                    { value: 'Spain', label: 'Spain' },
                    { value: 'China', label: 'China' },
                    { value: 'Japan', label: 'Japan' },
                    { value: 'UK', label: 'England' },
                  ]}
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Data Table</h5>
                  <h5 className="subhead">Use table with column's option <span className="red-text">sortable</span></h5>
                </div>
                <div className="form__form-group">
                  <span className="form__form-group-label">Guest</span>
                </div>
                <p>Show
                  <select className="select-options">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                  entries
                </p>
                <EditTable heads={this.heads} rows={this.state.rows} />
                <Pagination items={this.state.rows} onChangePage={this.onChangePage} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({
  form: 'filter_table_form', // a unique identifier for this form
})(DataTable);
