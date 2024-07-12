import Pagination from '@mui/material/Pagination';
import AddCategory from "../../components/modal/category-modal";
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
import categoryService from "../../service/category";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

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
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0); 
  const [params, setParams] = useState({
    limit: 5,
    page: 1
  });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await categoryService.get(params);
      if (response.status === 200 && response?.data?.categories) {
        setData(response?.data?.categories);
        let total = Math.ceil(response?.data?.total_count / params.limit);
        setCount(total);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  const deleteItem = async (category_id) => {
    try {
      const response = await categoryService.delete(category_id);
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (category) => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(null);
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
        <Button
          onClick={() => {
            setOpen(true);
            setSelectedCategory(null);
          }}
          variant="contained"
        >
          Add Category
        </Button>
        <AddCategory open={open} handleClose={handleClose} category={selectedCategory} />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">S/N</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row, index) => (
                <StyledTableRow key={row.category_id}>
                  <StyledTableCell align="left">
                    <form>
                      <input type="checkbox" />
                    </form>
                  </StyledTableCell>
                  <StyledTableCell align="center">{index + 1}</StyledTableCell>
                  <StyledTableCell align="center">{row.category_name}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <DeleteIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => deleteItem(row.category_id)}
                      />
                      <EditIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => editItem(row)}
                      />
                    </div>
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
