import Pagination from '@mui/material/Pagination';
import AddWorker from "../../components/modal/worker-modal";
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
import worker from "../../service/worker";
import { useEffect, useState } from "react";

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
  const [workers, setWorkers] = useState([]);
  
  const getWorker = async () => {
    try {
      const response = await worker.get(params);
      console.log(response);
      if (response.status === 200 && response?.data?.user) {
        setWorkers(response.data.user);
        let total = Math.ceil(response?.data?.totcal_count / params.limit);
        setCount(total);
        return response.data.user;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWorker();
  }, [params]);

  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const deleteItem = async (id) => {
    try {
      const response = await worker.delete(id);
      if (response.status === 200) {
        setWorkers(workers.filter(worker => worker.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editItem = (row) => {
    setEdit(row);
    setOpen(true);
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
        <Button onClick={() => editItem({})} variant="contained" >
          Add Worker
        </Button>
        <AddWorker row={edit} open={open} handleClose={() => setOpen(false)} />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S/N</StyledTableCell>
              <StyledTableCell align="center">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Gender</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workers &&
              workers.map((row, index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.gender}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.age}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <button onClick={() => editItem(row)}>
                      <EditIcon color="error" />
                    </button>
                    <button onClick={() => deleteItem(row.id)}>
                      <DeleteIcon color="error" />
                    </button>
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
