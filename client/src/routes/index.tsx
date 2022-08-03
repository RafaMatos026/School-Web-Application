import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../views/Register/Register';
import StructureAdmin from '../views/Admin/StructureAdmin';


export const AppRoutes = () => {
    return (
        <Routes>
            {/** OTHERS */}
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<Navigate to='/register' />} />

            {/** ADMIN */}
            <Route path='/admin' element={<StructureAdmin />} />
            <Route path='/admin/registration-requests' element={<StructureAdmin/>}/>
            
        </Routes>
    );
}