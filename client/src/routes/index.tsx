import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../views/Register/Register';
import StructureAdmin from '../views/Admiro/StructureAdmin';
import RegistrationRequests from '../views/Admiro/Teachers/AcceptRegistrations';
import RequestForm from '../views/Admiro/Teachers/RequestForm';
import CreateStudent from '../views/Admiro/Students/CreateStudent';
import CreateClass from '../views/Admiro/Aulas/CreateClass';
import ClassList from '../views/Admiro/Aulas/ClassList';
import StudentList from '../views/Admiro/Students/StudentList';
import TeacherList from '../views/Admiro/Teachers/TeacherList';


export const AppRoutes = () => {
    return (
        <Routes>
            {/** OTHERS */}
            <Route path='/register' element={<Register />} />

            {/** ADMIN */}
            <Route path='/admin' element={<StructureAdmin child={<h1>Admin</h1>} />} />
            <Route path='/admin/registration-requests' element={<StructureAdmin child={<RegistrationRequests />} />} />
            <Route path='/admin/create-student' element={<StructureAdmin child={<CreateStudent />} />} />
            <Route path='/admin/create-class' element={<StructureAdmin child={<CreateClass />} />} />
            <Route path='/admin/class-list' element={<StructureAdmin child={<ClassList />} />} />
            <Route path='/admin/student-list' element={<StructureAdmin child={<StudentList />} />} />
            <Route path='/admin/teacher-list' element={<StructureAdmin child={<TeacherList />} />} />
            <Route path='/admin/request/1' element={<StructureAdmin child={<RequestForm />} />} />

            {/* 404 */}
            <Route path='*' element={<Navigate to='/admin' />} />
        </Routes>
    );
}