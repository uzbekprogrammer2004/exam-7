import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import HomeIcon from '@mui/icons-material/Home';
//Assalomu alaykum ustoz hamma joyini o'qisizmi joy qoldirmasdan
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import PeopleIcon from '@mui/icons-material/People';
const routes = [
    {
        path: "/",
        content: "Category",
        icon: <HomeIcon/>
        
    },
    {
        path: "/products",
        content: "Products",
        icon: <LocalPostOfficeIcon/>
    },
    {
        path: "/workers",
        content: "Worker",
        icon: <PeopleIcon/>
    },
]

export default routes