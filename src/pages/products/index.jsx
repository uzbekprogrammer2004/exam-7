
// import Pagination from '@mui/material/Pagination';
// import AddProducts from "../../components/modal/products-modal";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button"; 
// import productService from "../../service/products";
// import { useEffect, useState } from "react";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Link, Navigate } from 'react-router-dom';
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Index = () => {
//   const [count, setCount] = useState(0); 
//   const [params, setParams] = useState({
//     limit: 3,
//     page: 1
//   });
//   const [products, setProducts] = useState([]);
  
//   const getProducts = async () => {
//     try {
//       const response = await productService.get(params);
//       console.log(response);
//       if (response.status === 200 && response?.data?.products) {
//         setProducts(response.data.products);
//         let total = Math.ceil(response?.data?.total_count / params.limit);
//         setCount(total);
//         return response.data.products;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   useEffect(() => {
//     getProducts();
//   }, [params]);
  
//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);

//   const deleteItem = async (id) => {
//     try {
//       const response = await productService.delete(id);
//       if (response.status === 200) {
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const editItem = (row) => {
//     setEdit(row);
//     setOpen(true);
//   };
//   const singleItem = (id) => {
//     console.log(id);
//   };
  
//   const handleChange = (event, value) => {
//     setParams((prevParams) => ({
//       ...prevParams,
//       page: value
//     }));
//   };
//   return (
//     <div>
//       <div className="flex w-full justify-end items-center mb-6">
//         <Button onClick={() => editItem({})} variant="contained">
//           Add Product
//         </Button>
//         <AddProducts row={edit} open={open} handleClose={() => setOpen(false)} />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>S/N</StyledTableCell>
//               <StyledTableCell align="left">Product Name</StyledTableCell>
//               <StyledTableCell align="right">Color</StyledTableCell>
//               <StyledTableCell align="right">Size</StyledTableCell>
//               <StyledTableCell align="right">Count</StyledTableCell>
//               <StyledTableCell align="right">Cost</StyledTableCell>
//               <StyledTableCell align="right">Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products &&
//               products.map((row, index) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell>{index + 1}</StyledTableCell>
//                   <StyledTableCell component="th" scope="row">
//                     {row.product_name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.color}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.size}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.count}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.cost}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <button onClick={() => editItem(row)}>
//                       <EditIcon color="error" />
//                     </button>
//                     <button onClick={() => deleteItem(row.id)}>
//                       <DeleteIcon color="error" />
//                     </button>
//                     <Link to={`/ProductSinglePage/${row.id}`}><VisibilityIcon color="error" /></Link>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Pagination count={count} page={params.page} onChange={handleChange} />
//     </div>
//   );
// };

// export default Index;




// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin ===================== 







// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================
// =================tegilmasin =====================














// import Pagination from '@mui/material/Pagination';
// import AddProducts from "../../components/modal/products-modal";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button"; 
// import productService from "../../service/products";
// import { useEffect, useState } from "react";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { Link } from 'react-router-dom';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Index = () => {
//   const [count, setCount] = useState(0); 
//   const [params, setParams] = useState({
//     limit: 3,
//     page: 1
//   });
//   const [products, setProducts] = useState([]);
  
//   const getProducts = async () => {
//     try {
//       const response = await productService.get(params);
//       console.log(response);
//       if (response.status === 200 && response?.data?.products) {
//         setProducts(response.data.products);
//         let total = Math.ceil(response?.data?.total_count / params.limit);
//         setCount(total);
//         return response.data.products;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   useEffect(() => {
//     getProducts();
//   }, [params]);
  
//   const [edit, setEdit] = useState({});
//   const [open, setOpen] = useState(false);

//   const deleteItem = async (id) => {
//     try {
//       const response = await productService.delete(id);
//       if (response.status === 200) {
//         window.location.reload();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const editItem = (row) => {
//     setEdit(row);
//     setOpen(true);
//   };

//   const singleItem = (id) => {
//     console.log(id);
//   };
  
//   const handleChange = (event, value) => {
//     setParams((prevParams) => ({
//       ...prevParams,
//       page: value
//     }));
//   };
  
//   return (
//     <div>
//       <div className="flex w-full justify-end items-center mb-6">
//         <Button onClick={() => editItem({})} variant="contained">
//           Add Product
//         </Button>
//         <AddProducts item={edit} open={open} handleClose={() => setOpen(false)} />
//       </div>

//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>S/N</StyledTableCell>
//               <StyledTableCell align="left">Product Name</StyledTableCell>
//               <StyledTableCell align="right">Color</StyledTableCell>
//               <StyledTableCell align="right">Size</StyledTableCell>
//               <StyledTableCell align="right">Count</StyledTableCell>
//               <StyledTableCell align="right">Cost</StyledTableCell>
//               <StyledTableCell align="right">Action</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products &&
//               products.map((row, index) => (
//                 <StyledTableRow key={row.id}>
//                   <StyledTableCell>{index + 1}</StyledTableCell>
//                   <StyledTableCell component="th" scope="row">
//                     {row.product_name}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.color}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.size}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.count}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     {row.cost}
//                   </StyledTableCell>
//                   <StyledTableCell align="right">
//                     <Button onClick={() => editItem(row)}>
//                       <EditIcon color="error" />
//                     </Button>
//                     <Button onClick={() => deleteItem(row.id)}>
//                       <DeleteIcon color="error" />
//                     </Button>
//                     <Link to={`/ProductSinglePage/${row.id}`}><VisibilityIcon color="error" /></Link>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Pagination count={count} page={params.page} onChange={handleChange} />
//     </div>
//   );
// };

// export default Index;


import Pagination from '@mui/material/Pagination';
import AddProducts from "../../components/modal/products-modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button"; 
import productService from "../../service/products";
import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Index = () => {
  const [count, setCount] = useState(0); 
  const [params, setParams] = useState({
    limit: 3,
    page: 1
  });
  const [products, setProducts] = useState([]);
  
  const getProducts = async () => {
    try {
      const response = await productService.get(params);
      console.log(response);
      if (response.status === 200 && response?.data?.products) {
        setProducts(response.data.products);
        let total = Math.ceil(response?.data?.total_count / params.limit);
        setCount(total);
        return response.data.products;
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    getProducts();
  }, [params]);
  
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const deleteItem = async (product_id) => {
    try {
      const response = await productService.delete(product_id);
      if (response.status === 200) {
        const updatedProducts = products.filter(product => product_id !== product_id);
        setProducts(updatedProducts);
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const singleItem = (id) => {
    console.log(id);
  };
  
  const handleChange = (event, value) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value
    }));
  };
  
  return (
    <div>
      <div className="flex w-full justify-end items-center mb-6">
        <Button onClick={() => editItem({})} variant="contained">
          Add Product
        </Button>
        <AddProducts item={edit} open={open} handleClose={() => setOpen(false)} />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S/N</StyledTableCell>
              <StyledTableCell align="left">Product Name</StyledTableCell>
              <StyledTableCell align="right">Color</StyledTableCell>
              <StyledTableCell align="right">Size</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right">Cost</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.product_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.color}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.size}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.count}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.cost}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button onClick={() => editItem(row)}>
                      <EditIcon color="error" />
                    </Button>
                    <Button onClick={() => deleteItem(row.product_id)}>
                      <DeleteIcon color="error" />
                    </Button>
                    <Link to={`/ProductSinglePage/${row.id}`}><VisibilityIcon color="error" /></Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={count} page={params.page} onChange={handleChange} />
    </div>
  );
};

export default Index;
