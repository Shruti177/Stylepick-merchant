import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Avatar,
  Pagination,
  Stack,
  Button, // Import Button from @mui/material
  Box
} from '@mui/material';
import NumberFormat from 'react-number-format';
import Dot from 'components/@extended/Dot';
import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import Checkbox from '@mui/material/Checkbox';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add import for the Add icon
import PublishIcon from '@mui/icons-material/Publish'; 
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; 

function createData(trackingNo, name, image, id, MAppId, type, uploadDate, status) {
  return { trackingNo, name, image, id, MAppId, type, uploadDate, status };
}

const rows = [
  createData(84564564, 'Camera Lens', '/path/to/image1.jpg', 40, 2, 'Type1', '2023-10-01', 0),
  createData(98764564, 'Laptop', '/path/to/image2.jpg', 300, 1, 'Type2', '2023-09-30', 1),
  createData(84564564, 'Camera Lens', '/path/to/image1.jpg', 40, 2, 'Type1', '2023-10-01', 0),
  createData(98764564, 'Laptop', '/path/to/image2.jpg', 300, 1, 'Type2', '2023-09-30', 1),
  createData(84564564, 'Camera Lens', '/path/to/image1.jpg', 40, 2, 'Type1', '2023-10-01', 0),
  createData(98764564, 'Laptop', '/path/to/image2.jpg', 300, 1, 'Type2', '2023-09-30', 1),
  createData(84564564, 'Camera Lens', '/path/to/image1.jpg', 40, 2, 'Type1', '2023-10-01', 0)
  
  // Add more rows as needed
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'select',
    align: 'left',
    disablePadding: false,
    label: (
      <Checkbox
        // indeterminate={selected.length > 0 && selected.length < rows.length}
        // checked={selected.length === rows.length}
        // onChange={handleSelectAllClick}
        inputProps={{ 'aria-label': 'select all rows' }}
      />
    ),
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: 'Image',
  },
  {
    id: 'id',
    align: 'right',
    disablePadding: false,
    label: 'ID($)',
  },
  {
    id: 'MAppId',
    align: 'left',
    disablePadding: false,
    label: 'MAppId',
  },
  {
    id: 'type',
    align: 'left',
    disablePadding: false,
    label: 'Type',
  },
  {
    id: 'uploadDate',
    align: 'left',
    disablePadding: false,
    label: 'Upload Date',
  },
  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'edit',
    align: 'left',
    disablePadding: false,
    label: 'Edit',
  },
];

function OrderTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'error';
      title = 'In active';
      break;
    case 1:
      color = 'primary';
      title = 'Active';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <>
    <Stack direction="row" alignItems="center">
      <Dot color={color} />
      <Typography color={color}>{title}</Typography>
    </Stack>
    </>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

  const OrderTable = () => {
  const [order] = useState('asc');
  const [orderBy] = useState('name');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1); // Current page (added this line)
  const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page


  const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;
//   const handleSelectAllClick = () => {
//     if (selected.length === rows.length) {
//     setSelected([]);
//   } else {
//     setSelected(rows.map((row) => row.trackingNo));
//   }
// };
  const handleClick = (trackingNo) => {
    const selectedIndex = selected.indexOf(trackingNo);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, trackingNo);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  // const paginatedRows = rows.slice(
  //   (page - 1) * rowsPerPage,
  //   page * rowsPerPage
  // );

  return (
    <div>
     <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="16px"
        paddingRight="16px" // Add paddingRight to move buttons to the right
      >
        <div>
          <Button variant="contained" color="primary" onClick={() => handleAddApparelClick()} startIcon={<AddCircleOutlineIcon />}>Add Apparel</Button>
        </div>
        <div>
          <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }} startIcon={<CloudDownloadIcon />}>Import</Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }} startIcon={<PublishIcon />}>Export</Button>
        </div>
      </Box>
    <TableContainer
      sx={{
        width: '100%',
        overflowX: 'auto',
        position: 'relative',
        display: 'block',
        maxWidth: '100%',
        '& td, & th': { whiteSpace: 'nowrap' },
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        sx={{
          '& .MuiTableCell-root:first-of-type': {
            pl: 2,
          },
          '& .MuiTableCell-root:last-of-type': {
            pr: 3,
          },
        }}
      >
        <OrderTableHead order={order} orderBy={orderBy} />
        <TableBody>
        {stableSort(rows, getComparator(order, orderBy))
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row) => {
              {/* {paginatedRows.map((row) => { */}

                const isItemSelected = isSelected(row.trackingNo);

            return (
              <TableRow
                hover
                onClick={() => handleClick(row.trackingNo)}
                role="checkbox"
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.trackingNo}
                selected={isItemSelected}
              >
               <TableCell align="left">
                  <Checkbox checked={isItemSelected} />
               </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">
                  <Avatar alt={row.name} src={row.image} />
                </TableCell>
                <TableCell align="right">
                  <NumberFormat value={row.id} displayType="text" thousandSeparator prefix="$" />
                </TableCell>
                <TableCell align="left">{row.MAppId}</TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="left">{row.uploadDate}</TableCell>
                <TableCell align="left">
                  <OrderStatus status={row.status} />
                </TableCell>
                <TableCell align="left">
                  <IconButton component={RouterLink} to="">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <Pagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
   </div>  
  );
};
export default OrderTable;
