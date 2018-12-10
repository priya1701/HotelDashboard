/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import axios from 'axios';
// import { Field } from 'redux-form';
import EditTable from '../../../../shared/components/table/EditableTable';
// import Pagination from '../../../../shared/components/pagination/Pagination';

export default class DataTable extends PureComponent {
  constructor() {
    super();
    this.heads = [
      {
        key: 'GuestId',
        name: 'Guest Id',
        width: 80,
      },
      {
        key: 'Surname',
        name: 'Surname',
        sortable: true,
      },
      {
        key: 'GivenName',
        name: 'Given Name',
        sortable: true,
      },
      {
        key: 'Sex',
        name: 'Sex',
      },
      {
        key: 'DateOfBirth',
        name: 'Date Of Birth',
      },
      {
        key: 'Nationality',
        name: 'Nationality',
      },
      {
        key: 'ArrivedFrom',
        name: 'Arrived From',
        sortable: true,
      },
      {
        key: 'AddressCurrent',
        name: 'Address',
      },
      {
        key: 'PermanentMobileNumber',
        name: 'Mobile No',
      },
      {
        key: 'IdentificationType',
        name: 'Id proof',
      },
      {
        key: 'DateOfArrivalInHotel',
        name: 'Check In',
        sortable: true,
      },
      {
        key: 'VerificationStatus',
        name: 'Verified',
      },
      {
        key: 'BlackListStatus',
        name: 'BlackList Status',
      },
      {
        key: 'Remarks',
        name: 'Remarks',
      },
    ];

    this.state = {
      rows: this.getRows(),
      pageOfItems: [],
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  getRows = () => {
    let rw = [];
    axios
      .get('http://35.247.129.253:3510/api/hotel.cto.Guest')
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
        rw = rows;
        console.log(rw);
        return rw;
      })
      .catch(error => console.log(error));
    // console.log(rw);
    // return rw;
  }

  // componentWillMount() {
  //   axios
  //     .get('http://35.247.129.253:3510/api/hotel.cto.Guest')
  //     .then((response) => {
  //       const rows = response.data.map((c) => {
  //         const obj = {
  //           GuestId: c.GuestId,
  //           Surname: c.Surname,
  //           GivenName: c.GivenName,
  //           Sex: c.Sex,
  //           DateOfBirth: c.DateOfBirth,
  //           Nationality: c.Nationality,
  //           ArrivedFrom: c.ArrivedFrom,
  //           AddressCurrent: c.AddressCurrent,
  //           PermanentMobileNumber: c.PermanentMobileNumber,
  //           IdentificationType: c.IdentificationType,
  //           DateOfArrivalInHotel: c.DateOfArrivalInHotel,
  //           VerificationStatus: c.VerificationStatus,
  //           BlackListStatus: c.BlackListStatus,
  //           Remarks: c.Remarks,
  //         };
  //         return obj;
  //       });
  //       // create a new "state" object without mutating
  //       // the original state object.
  //       const newState = Object.assign({}, {
  //         rows,
  //       });
  //       // store the new state object in the component's state
  //       this.setState({ rows: newState.rows });
  //       console.log(' --> ', this.state.rows);
  //     })
  //     .catch(error => console.log(error));
  // }

  render() {
    return (
      <Col md={12} lg={12}>
        {console.log(this.state)}
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Data Table</h5>
              <h5 className="subhead">Use table with column's option <span className="red-text">sortable</span></h5>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Guest Id</span>
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
          </CardBody>
        </Card>
      </Col>
    );
  }
}
