// // import PropTypes from 'prop-types';

// // // material-ui
// // import { Box, Card, Grid, Stack, Typography } from '@mui/material';

// // // project import
// // import MainCard from 'components/MainCard';
// // import ComponentSkeleton from './ComponentSkeleton';

// // // ===============================|| COLOR BOX ||=============================== //

// // function ColorBox({ bgcolor, title, data, dark, main }) {
// //   return (
// //     <>
// //       <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
// //         <Box
// //           sx={{
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             py: 2.5,
// //             bgcolor,
// //             color: dark ? 'grey.800' : '#ffffff',
// //             border: main ? '1px dashed' : '1px solid transparent'
// //           }}
// //         >
// //           {title && (
// //             <Grid container justifyContent="space-around" alignItems="center">
// //               <Grid item>
// //                 {data && (
// //                   <Stack spacing={0.75} alignItems="center">
// //                     <Typography variant="subtitle2">{data.label}</Typography>
// //                     <Typography variant="subtitle1">{data.color}</Typography>
// //                   </Stack>
// //                 )}
// //               </Grid>
// //               <Grid item>
// //                 <Typography variant="subtitle1" color="inherit">
// //                   {title}
// //                 </Typography>
// //               </Grid>
// //             </Grid>
// //           )}
// //         </Box>
// //       </Card>
// //     </>
// //   );
// // }

// // ColorBox.propTypes = {
// //   bgcolor: PropTypes.string,
// //   title: PropTypes.string,
// //   data: PropTypes.object.isRequired,
// //   dark: PropTypes.bool,
// //   main: PropTypes.bool
// // };

// // // ===============================|| COMPONENT - COLOR ||=============================== //

// // const ComponentColor = () => (
// //   <ComponentSkeleton>
// //     <Grid container spacing={3}>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Primary Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="primary.lighter" data={{ label: 'Blue-1', color: '#e6f7ff' }} title="primary.lighter" dark />
// //             <ColorBox bgcolor="primary.100" data={{ label: 'Blue-2', color: '#bae7ff' }} title="primary[100]" dark />
// //             <ColorBox bgcolor="primary.200" data={{ label: 'Blue-3', color: '#91d5ff' }} title="primary[200]" dark />
// //             <ColorBox bgcolor="primary.light" data={{ label: 'Blue-4', color: '#69c0ff' }} title="primary.light" dark />
// //             <ColorBox bgcolor="primary.400" data={{ label: 'Blue-5', color: '#40a9ff' }} title="primary[400]" />
// //             <ColorBox bgcolor="primary.main" data={{ label: 'Blue-6', color: '#1890ff' }} title="primary.main" main />
// //             <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-7', color: '#096dd9' }} title="primary.dark" />
// //             <ColorBox bgcolor="primary.700" data={{ label: 'Blue-8', color: '#0050b3' }} title="primary[700]" />
// //             <ColorBox bgcolor="primary.darker" data={{ label: 'Blue-9', color: '#003a8c' }} title="primary.darker" />
// //             <ColorBox bgcolor="primary.900" data={{ label: 'Blue-10', color: '#002766' }} title="primary.900" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Secondary Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="secondary.lighter" data={{ label: 'Grey-1', color: '#fafafa' }} title="secondary.lighter" dark />
// //             <ColorBox bgcolor="secondary.100" data={{ label: 'Grey-2', color: '#f5f5f5' }} title="secondary[100]" dark />
// //             <ColorBox bgcolor="secondary.200" data={{ label: 'Grey-3', color: '#f0f0f0' }} title="secondary[200]" dark />
// //             <ColorBox bgcolor="secondary.light" data={{ label: 'Grey-4', color: '#d9d9d9' }} title="secondary.light" dark />
// //             <ColorBox bgcolor="secondary.400" data={{ label: 'Grey-5', color: '#bfbfbf' }} title="secondary[400]" dark />
// //             <ColorBox bgcolor="secondary.main" data={{ label: 'Grey-6', color: '#8c8c8c' }} title="secondary.main" main />
// //             <ColorBox bgcolor="secondary.600" data={{ label: 'Grey-7', color: '#595959' }} title="secondary.600" />
// //             <ColorBox bgcolor="secondary.dark" data={{ label: 'Grey-8', color: '#262626' }} title="secondary.dark" />
// //             <ColorBox bgcolor="secondary.800" data={{ label: 'Grey-9', color: '#141414' }} title="secondary[800]" />
// //             <ColorBox bgcolor="secondary.darker" data={{ label: 'Grey-10', color: '#000000' }} title="secondary.darker" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Other Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="secondary.A100" data={{ label: 'Grey-A1', color: '#ffffff' }} title="secondary.A100" dark />
// //             <ColorBox bgcolor="secondary.A200" data={{ label: 'Grey-A2', color: '#434343' }} title="secondary.A200" />
// //             <ColorBox bgcolor="secondary.A300" data={{ label: 'Grey-A3', color: '#1f1f1f' }} title="secondary.A300" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Success Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="success.lighter" data={{ label: 'Green-1', color: '#f6ffed' }} title="success.lighter" dark />
// //             <ColorBox bgcolor="success.light" data={{ label: 'Green-4', color: '#95de64' }} title="success.light" dark />
// //             <ColorBox bgcolor="success.main" data={{ label: 'Green-6', color: '#52c41a' }} title="success.main" main />
// //             <ColorBox bgcolor="success.dark" data={{ label: 'Green-8', color: '#237804' }} title="success.dark" />
// //             <ColorBox bgcolor="success.darker" data={{ label: 'Green-10', color: '#092b00' }} title="success.darker" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Error Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="error.lighter" data={{ label: 'Red-1', color: '#fff1f0' }} title="error.lighter" dark />
// //             <ColorBox bgcolor="error.light" data={{ label: 'Red-4', color: '#ff7875' }} title="error.light" dark />
// //             <ColorBox bgcolor="error.main" data={{ label: 'Red-6', color: '#f5222d' }} title="error.main" main />
// //             <ColorBox bgcolor="error.dark" data={{ label: 'Red-8', color: '#a8071a' }} title="error.dark" />
// //             <ColorBox bgcolor="error.darker" data={{ label: 'Red-10', color: '#5c0011' }} title="error.darker" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //       <Grid item xs={12} sm={6} md={4}>
// //         <MainCard title="Warning Color" codeHighlight>
// //           <Stack>
// //             <ColorBox bgcolor="warning.lighter" data={{ label: 'Gold-1', color: '#fffbe6' }} title="warning.lighter" dark />
// //             <ColorBox bgcolor="warning.light" data={{ label: 'Gold-4', color: '#ffd666' }} title="warning.light" dark />
// //             <ColorBox bgcolor="warning.main" data={{ label: 'Gold-6', color: '#faad14' }} title="warning.main" main />
// //             <ColorBox bgcolor="warning.dark" data={{ label: 'Gold-8', color: '#ad6800' }} title="warning.dark" />
// //             <ColorBox bgcolor="warning.darker" data={{ label: 'Gold-10', color: '#613400' }} title="warning.darker" />
// //           </Stack>
// //         </MainCard>
// //       </Grid>
// //     </Grid>
// //   </ComponentSkeleton>
// // );

// // export default ComponentColor;

// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';

// // material-ui
// import {
//   Box,
//   Link,
//   Stack,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   Checkbox,
//   // IconButton,
//   Button,
//   TableSortLabel, // Add this import
//   TablePagination
// } from '@mui/material';

// // third-party
// // import NumberFormat from 'react-number-format';

// // project import
// import Dot from 'components/@extended/Dot';
// import GetAppIcon from '@mui/icons-material/GetApp'; // Import GetAppIcon for export
// import { visuallyHidden } from '@mui/utils';


// function createData(trackingNo, name, phoneNo, vtoTried, createdDate, imageLink) {
//   return { trackingNo, name, phoneNo, vtoTried, createdDate, imageLink };
// }

// const rows = [
//   createData(84564564, 'Camera Lens', '123-456-7890', 'Yes', '2023-10-01', 'https://example.com/image1.jpg'),
//   createData(98764564, 'Laptop', '987-654-3210', 'No', '2023-09-30', 'https://example.com/image2.jpg'),
//   // Add more rows as needed
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// // ==============================|| ORDER TABLE - HEADER CELL ||============================== //

// const headCells = [
//   {
//     id: 'trackingNo',
//     align: 'left',
//     disablePadding: false,
//     label: 'Tracking No.',
//   },
//   {
//     id: 'name',
//     align: 'left',
//     disablePadding: true,
//     label: 'Name',
//   },
//   {
//     id: 'phoneNo',
//     align: 'left',
//     disablePadding: false,
//     label: 'Phone No.',
//   },
//   {
//     id: 'vtoTried',
//     align: 'left',
//     disablePadding: false,
//     label: 'VTO Tried',
//   },
//   {
//     id: 'createdDate',
//     align: 'left',
//     disablePadding: false,
//     label: 'Created Date',
//   },
//   {
//     id: 'imageLink',
//     align: 'left',
//     disablePadding: false,
//     label: 'Image Link',
//   },
// ];

// // ==============================|| ORDER TABLE - HEADER ||============================== //

// function OrderTableHead({ order, orderBy, numSelected, rowCount, onRequestSort }) {
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             inputProps={{ 'aria-label': 'select all desserts' }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.align}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
       
//       </TableRow>
//     </TableHead>
//   );
// }

// OrderTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// // ==============================|| ORDER TABLE - STATUS ||============================== //

// const OrderStatus = () => {
//   let color;
//   let title;

//   return (
//     <Stack direction="row" spacing={1} alignItems="center">
//       <Dot color={color} />
//       <Typography>{title}</Typography>
//     </Stack>
//   );
// };

// OrderStatus.propTypes = {
//   status: PropTypes.string,
// };

// // ==============================|| ORDER TABLE ||============================== //

// export default function OrderTable() {
//   const [order, setOrder] = useState('asc');
//   const [orderBy, setOrderBy] = useState('trackingNo');
//   const [selected, setSelected] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   // const handleSelectAllClick = (event) => {
//   //   if (event.target.checked) {
//   //     const newSelecteds = rows.map((n) => n.trackingNo);
//   //     setSelected(newSelecteds);
//   //     return;
//   //   }
//   //   setSelected([]);
//   // };

//   const handleClick = (event, trackingNo) => {
//     const selectedIndex = selected.indexOf(trackingNo);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, trackingNo);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

//   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

//   return (
//     <Box>
//       <TableContainer
//         sx={{
//           width: '100%',
//           overflowX: 'auto',
//           position: 'relative',
//           display: 'block',
//           maxWidth: '100%',
//           '& td, & th': { whiteSpace: 'nowrap' },
//         }}
//       >
//         <Table
//           aria-labelledby="tableTitle"
//           sx={{
//             '& .MuiTableCell-root:first-of-type': {
//               pl: 2,
//             },
//             '& .MuiTableCell-root:last-of-type': {
//               pr: 3,
//             },
//           }}
//         >
//           <OrderTableHead
//             numSelected={selected.length}
//             order={order}
//             orderBy={orderBy}
//             onRequestSort={handleRequestSort}
//             rowCount={rows.length}
//           />
//           <TableBody>
//             {stableSort(rows, getComparator(order, orderBy))
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => {
//                 const isItemSelected = isSelected(row.trackingNo);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.trackingNo)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.trackingNo}
//                     selected={isItemSelected}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         checked={isItemSelected}
//                         inputProps={{ 'aria-labelledby': labelId }}
//                       />
//                     </TableCell>
//                     <TableCell component="th" id={labelId} scope="row" align="left">
//                       <Link color="secondary" component={RouterLink} to="">
//                         {row.trackingNo}
//                       </Link>
//                     </TableCell>
//                     <TableCell align="left">{row.name}</TableCell>
//                     <TableCell align="left">{row.phoneNo}</TableCell>
//                     <TableCell align="left">{row.vtoTried}</TableCell>
//                     <TableCell align="left">{row.createdDate}</TableCell>
//                     <TableCell align="left">
//                       <a href={row.imageLink} target="_blank" rel="noopener noreferrer">
//                         Image Link
//                       </a>
//                     </TableCell>
//                   </TableRow>
//                 );
//               })}

//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <TableCell colSpan={7} />
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination */}
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Box>

//       {/* Export Button */}
//       <Box
//         display="flex"
//         justifyContent="flex-end"
//         alignItems="center"
//         marginBottom="16px"
//         paddingRight="16px" // Add paddingRight to move buttons to the right
//       >
//         <div>
//           <Button
//             variant="outlined"
//             color="primary"
//             style={{ marginLeft: '8px' }}
//             onClick={() => handleExportClick()}
//           >
//             <GetAppIcon />
//             Export
//           </Button>
//         </div>
//       </Box>
//     </Box>
//   );
// }

import PropTypes from 'prop-types';
import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // IconButton,
  Avatar,
  Pagination,
  Button // Import Button from @mui/material
  // Box
} from '@mui/material';
import NumberFormat from 'react-number-format';
// import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon
import Checkbox from '@mui/material/Checkbox';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Add import for the Add icon
import PublishIcon from '@mui/icons-material/Publish'; 
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; 

function createData(trackingNo, name, image, id, MAppId, type, uploadDate, status) {
  return { trackingNo, name, image, id, MAppId, type, uploadDate, status };
}

const rows = [
    createData(84564564, 'Camera Lens', '123-456-7890', 'Yes', '2023-10-01', 'https://example.com/image1.jpg'),
    createData(98764564, 'Laptop', '987-654-3210', 'No', '2023-09-30', 'https://example.com/image2.jpg'),
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
        disablePadding: true,
        label: 'Name',
      },
      {
        id: 'phoneNo',
        align: 'left',
        disablePadding: false,
        label: 'Phone No.',
      },
      {
        id: 'vtoTried',
        align: 'left',
        disablePadding: false,
        label: 'VTO Tried',
      },
      {
        id: 'createdDate',
        align: 'left',
        disablePadding: false,
        label: 'Created Date',
      },
      {
        id: 'imageLink',
        align: 'left',
        disablePadding: false,
        label: 'Image Link',
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
    {/* <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="16px"
        paddingRight="16px" // Add paddingRight to move buttons to the right
      > */}
        <div>
        <Button variant="outlined" color="primary" style={{ marginLeft: '16px' }} startIcon={<PublishIcon />}>Export</Button>
        </div>
      {/* </Box> */}
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
