import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
//import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const rows = [
  { id: 'GuestId', numeric: false, disablePadding: true, label: 'Guest Id', },
  { id: 'Surname', numeric: false, disablePadding: false, label: 'Surname', },
  { id: 'GivenName', numeric: false, disablePadding: false, label: 'Given Name', },
  { id: 'Sex', numeric: false, disablePadding: false, label: 'Sex', },
  { id: 'DateOfBirth', numeric: false, disablePadding: false, label: 'Date Of Birth', },
  { id: 'Nationality', numeric: false, disablePadding: false, label: 'Nationality', },
  { id: 'ArrivedFrom', numeric: false, disablePadding: false, label: 'Arrived From', },
  { id: 'AddressCurrent', numeric: false, disablePadding: false, label: 'Address', },
  { id: 'PermanentMobileNumber', numeric: false, disablePadding: false, label: 'Mobile No', },
  { id: 'IdentificationType', numeric: false, disablePadding: false, label: 'Id proof', },
  { id: 'DateOfArrivalInHotel', numeric: false, disablePadding: false, label: 'Check In', },
  { id: 'VerificationStatus', numeric: false, disablePadding: false, label: 'Verified', },
  { id: 'BlackListStatus', numeric: false, disablePadding: false, label: 'BlackList Status', },
  { id: 'Remarks', numeric: false, disablePadding: false, label: 'Remarks', },
];

export default class MatTableHead extends PureComponent {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number,
  };

  createSortHandler = property => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      order, orderBy,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          {rows.map(row => (
            <TableCell
              className="material-table__cell material-table__cell--sort"
              key={row.id}
              numeric={row.numeric}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === row.id}
                direction={order}
                onClick={this.createSortHandler(row.id)}
                className="material-table__sort-label"
              >
                {row.label}
              </TableSortLabel>
            </TableCell>
            ), this)}
        </TableRow>
      </TableHead>
    );
  }
}
