import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from '@mui/material/Pagination';
import productService from "../../service/products";
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddProducts from "../../components/modal/products-modal";
import { styled } from "@mui/material/styles";
import http from '../../service/config';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [params, setParams] = useState({
    limit: 3,
    page: 1
  });
  const [products, setProducts] = useState([]);
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const getProducts = async () => {
    try {
      const response = await productService.get(params);
      if (response.status === 200 && response?.data?.products) {
        setProducts(response.data.products);
        let total = Math.ceil(response?.data?.total_count / params.limit);
        setCount(total);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [params]);

  const deleteItem = async (id) => {
    try {
      const response = await productService.delete(id);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleFileUpload = async () => {
    const id = localStorage.getItem("product_id");
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await http.post(`media/upload-photo?id=${id}`, formData);
      console.log("File uploaded successfully", response);
      // Qo'shimcha kerak bo'lgan kodlar
      setModalOpen(false); // Modalni yopish
      setSelectedFile(null); // Tanlangan faylni qaytarish
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
  };

  const singleItem = (id) => {
    localStorage.setItem("product_id", id);
  };

  const handleChange = (event, value) => {
    setParams((prevParams) => ({
      ...prevParams,
      page: value
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rasmni yuklang
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleFileUpload} disabled={!selectedFile} variant="contained" color="primary">
              OK
            </Button>
          </Typography>
        </Box>
      </Modal>
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
              <StyledTableCell align="center">Action</StyledTableCell>
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
                    <Link onClick={() => singleItem(row.product_id)} to={`/ProductSinglePage/${row.product_id}`}>
                      <VisibilityIcon color="error" />
                    </Link>
                    <Button onClick={toggleModal}>
                      <AddPhotoAlternateIcon color="error" />
                    </Button>
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
