import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../views/Register/Register';
import StructureAdmin from '../views/Admiro/StructureAdmin';
import RegistrationRequests from '../views/Admiro/Teachers/AcceptRegistrations';
import RequestForm from '../views/Admiro/Teachers/RequestForm';
import CreateStudent from '../views/Admiro/Students/CreateStudent';


export const AppRoutes = () => {
    return (
        <Routes>
            {/** OTHERS */}
            <Route path='/register' element={<Register />} />

            {/** ADMIN */}
            <Route path='/admin' element={<StructureAdmin child={<h1>Admin</h1>} />} />
            <Route path='/admin/registration-requests'
                element={<StructureAdmin child={<RegistrationRequests />} />} />
            <Route path='/admin/request/1' element={<StructureAdmin child={<RequestForm />} />} />
            <Route path='/admin/create-student' element={<StructureAdmin child={<CreateStudent />}/>}/>

            {/* 404 */}
            <Route path='*' element={<Navigate to='/admin' />} />
        </Routes>
    );
}