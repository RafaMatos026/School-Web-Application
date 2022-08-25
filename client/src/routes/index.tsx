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
import ClassMenuAdmin from '../views/Admiro/Aulas/ClassMenu';
import AssignStudent from '../views/Admiro/Aulas/AssignStudent';
import AssignedStudents from '../views/Admiro/Aulas/AssignedStudents';
import AssignTeacher from '../views/Admiro/Aulas/AssignTeacher';
import AssignedTeachers from '../views/Admiro/Aulas/AssignedTeachers';
import EditClass from '../views/Admiro/Aulas/EditClass';
import Login from '../views/Login/Login';
import StructureTeacher from '../views/Teacher/StructureTeacher';
import MyClasses from '../views/Teacher/MyClasses/MyClasses';
import ClassMenuTeacher from '../views/Teacher/MyClasses/ClassMenu';
import PastSummaries from '../views/Teacher/MyClasses/PastSummaries';
import StudentAttendance from '../views/Teacher/MyClasses/StudenAttendance';
import StructureStudent from '../views/Student/StructureStudent';
import MyClassesStudent from '../views/Student/MyClasses/MyClasses';
import ClassMenuStudent from '../views/Student/MyClasses/ClassMenu';
import PastSummariesStudent from '../views/Student/MyClasses/PastSummaries';
import SubmittedEvaluations from '../views/Student/MyClasses/SubmittedEvaluations';
import DisabledClasses from '../views/Admiro/Aulas/DisabledClasses';
import DisabledStudents from '../views/Admiro/Students/DisabledStudents';
import DisabledTeachers from '../views/Admiro/Teachers/DisabledTeachers';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Portal from '../views/others/Portal';
import { admin, student, teacher } from '../shared/consts';

export const AppRoutes = () => {

    const user_role = useContext(AuthContext).user?.AccountType;
    const user = useContext(AuthContext).user;
    const homepage = currentHP();

    return (
        <Routes>

            {/** LOGIN - REGISTER */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/** Portal */}
            <Route path='/' element={<Portal />} />

            {/**Homes*/}
            <Route path='/admin' element={user_role === admin && user ? <StructureAdmin child={<h1>Hello Admin</h1>} /> : <Navigate to={'/login'} />} />
            <Route path='/teacher' element={user_role === teacher && user ? <StructureTeacher child={<h1>Hello Teacher</h1>} /> : <Navigate to={'/login'} />} />
            <Route path='/student' element={user_role === student && user ? <StructureStudent child={<h1>Hello Student!</h1>} /> : <Navigate to={'/login'} />} />

            {/** ADMIN */}
            <Route path='/admin/registration-requests' element={user_role === admin && <StructureAdmin child={<RegistrationRequests />} />} />
            <Route path='/admin/create-student' element={user_role === admin ? <StructureAdmin child={<CreateStudent />} /> : homepage} />
            <Route path='/admin/create-class' element={user_role === admin ? <StructureAdmin child={<CreateClass />} /> : homepage} />
            <Route path='/admin/class-list' element={user_role === admin ? <StructureAdmin child={<ClassList />} /> : homepage} />
            <Route path='/admin/student-list' element={user_role === admin ? <StructureAdmin child={<StudentList />} /> : homepage} />
            <Route path='/admin/teacher-list' element={user_role === admin ? <StructureAdmin child={<TeacherList />} /> : homepage} />
            <Route path='/admin/request/:_id' element={user_role === admin ? <StructureAdmin child={<RequestForm />} /> : homepage} />
            <Route path='/admin/class/:_id' element={user_role === admin ? <StructureAdmin child={<ClassMenuAdmin />} /> : homepage} />
            <Route path='/admin/class/:_id/assign-students' element={user_role === admin ?
                <StructureAdmin child={<AssignStudent />} /> : homepage} />
            <Route path='/admin/class/:_id/assigned-students' element={user_role === admin ?
                <StructureAdmin child={<AssignedStudents />} /> : homepage} />
            <Route path='/admin/class/:_id/assign-teachers' element={user_role === admin ?
                <StructureAdmin child={<AssignTeacher />} /> : homepage} />
            <Route path='/admin/class/:_id/assigned-teachers' element={user_role === admin ?
                <StructureAdmin child={<AssignedTeachers />} /> : homepage} />
            <Route path='/admin/class/:_id/edit' element={user_role === admin ? <StructureAdmin child={<EditClass />} /> : homepage} />
            <Route path='/admin/disabled-class-list' element={user_role === admin ? <StructureAdmin child={<DisabledClasses />} /> : homepage} />
            <Route path='/admin/disabled-student-list' element={user_role === admin ?
                <StructureAdmin child={<DisabledStudents />} /> : homepage} />
            <Route path='/admin/disabled-teacher-list' element={user_role === admin ?
                <StructureAdmin child={<DisabledTeachers />} /> : homepage} />

            {/** TEACHER */}
            <Route path='/teacher/create-class' element={user_role === teacher ?
                <StructureTeacher child={<CreateClass />} /> : homepage} />
            <Route path='/teacher/myClasses' element={user_role === teacher ?
                <StructureTeacher child={<MyClasses />} /> : homepage} />
            <Route path='/teacher/myClasses/:_id' element={user_role === teacher ?
                <StructureTeacher child={<ClassMenuTeacher />} /> : homepage} />
            <Route path='/teacher/myClasses/:_id/past-summaries' element={user_role === teacher ?
                <StructureTeacher child={<PastSummaries />} /> : homepage} />
            <Route path='/teacher/myClasses/:_id/student-attendance' element={user_role === teacher ?
                <StructureTeacher child={<StudentAttendance />} /> : homepage} />

            {/** STUDENT */}
            <Route path='/student/myClasses' element={user_role === student ?
                <StructureStudent child={<MyClassesStudent />} /> : homepage} />
            <Route path='/student/myClasses/:_id' element={user_role === student ?
                <StructureStudent child={<ClassMenuStudent />} /> : homepage} />
            <Route path='/student/myClasses/:_id/submitted-evaluations' element={user_role === student ?
                <StructureStudent child={<SubmittedEvaluations />} /> : homepage} />
            <Route path='/student/myClasses/:_id/past-summaries' element={user_role === student ?
                <StructureStudent child={<PastSummariesStudent />} /> : homepage} />

            {/* 404 */}
            <Route path='*' element={user ? homepage : <Navigate to={'/login'} />} />
        </Routes>
    );

    function currentHP() {
        if (user_role === admin) {
            return <Navigate to={'/admin'} />
        } else if (user_role === teacher) {
            return <StructureTeacher child={<h1>Hello Teacher</h1>} />
        } else {
            return <Navigate to={'/student'} />
        }
    }
}
