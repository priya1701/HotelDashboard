import React, { PureComponent } from 'react';
import { Container, Card, CardBody, Col, Row, Button, ButtonToolbar } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MatTableHead from './MatTableHead';
import base from '../../../../baseHelper/base'
import authHeader from '../../../../baseHelper/auth'
import renderSelectField from '../../../../shared/components/form/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import MatTableToolbar from './MatTableToolbar';

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => b[orderBy] - a[orderBy] : (a, b) => a[orderBy] - b[orderBy];
}

class MatTable extends PureComponent {
  state = {
    order: 'asc',
    orderBy: 'GuestId',
    selected: [],
    data: [],
    page: 0,
    rowsPerPage: 5,
  };

  componentDidMount = () => {
    console.log("Table Tkn", base.Token);
    let config = {
      headers: authHeader()
    };
    axios
      .get('http://35.244.42.179:3000/user/guest', config)
      .then((response) => {
        const rows = response.data.map((c) => {
          const obj = {
            GuestId: c.GuestId,
            Surname: c.Surname,
            GivenName: c.GivenName,
            Sex: c.Sex,
            DateOfBirth: c.DateOfBirth,
            Nationality: c.Nationality,
            ArrivedFrom: c.ArrivedFrom,
            AddressCurrent: c.AddressCurrent,
            PermanentMobileNumber: c.PermanentMobileNumber,
            IdentificationType: c.IdentificationType,
            DateOfArrivalInHotel: c.DateOfArrivalInHotel,
            VerificationStatus: c.VerificationStatus,
            BlackListStatus: c.BlackListStatus,
            Remarks: c.Remarks,
          };
          return obj;
        });
        this.setState({ data : rows});
      })
      .catch(error => console.log(error));
    // console.log(rw);
    // return rw;
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') { order = 'asc'; }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };


  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {
      data, order, orderBy, rowsPerPage, page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));

    return (
      <Container>
      <Row>
      <form className="form form--horizontal" onSubmit={handleSubmit}>
        <div className="form__form-group">
          <span className="form__form-group-label">Area</span>
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
              <h5 className="bold-text">Guest List</h5>
            </div>
            <div className="material-table__wrap">
              <Table className="material-table">
                <MatTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={this.handleRequestSort}
                />
                <TableBody>
                  {data
                    .sort(getSorting(order, orderBy))
                    .slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage)
                    .map((d) => {
                      return (
                        <TableRow
                          className="material-table__row"
                          tabIndex={-1}
                          key={d.GuestId}
                        >
                          <TableCell
                            className="material-table__cell"
                            component="th"
                            scope="row"
                            padding="none"
                          >
                            {d.GuestId}
                          </TableCell>
                          <TableCell className="material-table__cell">{d.Surname}</TableCell>
                          <TableCell className="material-table__cell">{d.GivenName}</TableCell>
                          <TableCell className="material-table__cell">{d.Sex}</TableCell>
                          <TableCell className="material-table__cell">{d.DateOfBirth}</TableCell>
                          <TableCell className="material-table__cell">{d.Nationality}</TableCell>
                          <TableCell className="material-table__cell">{d.ArrivedFrom}</TableCell>
                          <TableCell className="material-table__cell">{d.AddressCurrent}</TableCell>
                          <TableCell className="material-table__cell">{d.PermanentMobileNumber}</TableCell>
                          <TableCell className="material-table__cell">{d.IdentificationType}</TableCell>
                          <TableCell className="material-table__cell">{d.DateOfArrivalInHotel}</TableCell>
                          <TableCell className="material-table__cell">{d.VerificationStatus}</TableCell>
                          <TableCell className="material-table__cell">{d.BlackListStatus}</TableCell>
                          <TableCell className="material-table__cell">{d.Remarks}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 49 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <TablePagination
              component="div"
              className="material-table__pagination"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{ 'aria-label': 'Previous Page' }}
              nextIconButtonProps={{ 'aria-label': 'Next Page' }}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              rowsPerPageOptions={[5, 10, 15]}
            />
          </CardBody>
        </Card>
      </Col>
     </Row>
     </Container>
    );
  }
}

export default reduxForm({
  form: 'filter_table_form_city', // a unique identifier for this form
})(MatTable);
