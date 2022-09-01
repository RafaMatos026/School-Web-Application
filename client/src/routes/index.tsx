import { Routes, Route } from 'react-router-dom';
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
import Portal from '../views/others/Portal';
import EditProfile from '../shared/views/EditProfile';
import RequireAuth from '../auth/RequireAuth';
import { admin, student, teacher } from '../shared/consts';
import Unathorized from '../shared/views/Unauthorized';
import ForgotPassword from '../views/others/ForgotPassword';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import Evaluations from '../views/Teacher/MyClasses/Evaluations';
import Lost from '../shared/views/404';


export const AppRoutes = () => {

    const { user } = useContext(AuthContext);

    return (
        <Routes>
            {/** LOGIN - REGISTER - FORGOT PASSWORD*/}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />

            {/** Portal */}
            <Route path='/' element={<Portal />} />

            {/* UNAUTHORIZED */}
            <Route path='/unauthorized' element={<Unathorized />} />

            {/** ADMIN */}
            <Route element={user && <RequireAuth allowedRole={admin} user={user} />}>
                <Route path='/admin' element={<StructureAdmin active={true} page_title='Homepage' child={<h1>Hello Admin</h1>} />} />
                <Route path='/admin/registration-requests' element={<StructureAdmin page_title='Registration Requests' child={<RegistrationRequests />} />} />
                <Route path='/admin/create-student' element={<StructureAdmin page_title='Create Student' child={<CreateStudent />} />} />
                <Route path='/admin/create-class' element={<StructureAdmin page_title='Create Class' child={<CreateClass />} />} />
                <Route path='/admin/class-list' element={<StructureAdmin page_title='Class List' child={<ClassList />} />} />
                <Route path='/admin/student-list' element={<StructureAdmin page_title='Student List' child={<StudentList />} />} />
                <Route path='/admin/teacher-list' element={<StructureAdmin page_title='Teacher List' child={<TeacherList />} />} />
                <Route path='/admin/request/:_id' element={<StructureAdmin active={true} page_title='Request' child={<RequestForm />} />} />
                <Route path='/admin/class/:_id' element={<StructureAdmin active={true} page_title='Class' child={<ClassMenuAdmin />} />} />
                <Route path='/admin/class/:_id/assign-students' element={
                    <StructureAdmin active={true} page_title='Assign Students to Class' child={<AssignStudent />} />} />
                <Route path='/admin/class/:_id/assigned-students' element={
                    <StructureAdmin active={true} page_title='Assigned Students' child={<AssignedStudents />} />} />
                <Route path='/admin/class/:_id/assign-teachers' element={
                    <StructureAdmin active={true} page_title='Assign Teachers' child={<AssignTeacher />} />} />
                <Route path='/admin/class/:_id/assigned-teachers' element={
                    <StructureAdmin active={true} page_title='Assigned Teachers' child={<AssignedTeachers />} />} />
                <Route path='/admin/class/:_id/edit' element={<StructureAdmin active={true} page_title='Edit Class' child={<EditClass />} />} />
                <Route path='/admin/disabled-class-list' element={<StructureAdmin page_title='Disabled Classes' child={<DisabledClasses />} />} />
                <Route path='/admin/disabled-student-list' element={
                    <StructureAdmin page_title='Disabled Students' child={<DisabledStudents />} />} />
                <Route path='/admin/disabled-teacher-list' element={
                    <StructureAdmin page_title='Disabled Teachers' child={<DisabledTeachers />} />} />
                <Route path='/admin/settings/:_id/' element={
                    <StructureAdmin page_title='Edit profile' child={<EditProfile />} />} />
            </Route>

            {/** TEACHER */}
            <Route element={user && <RequireAuth allowedRole={teacher} user={user} />}>
                <Route path='/teacher' element={<StructureTeacher page_title='Homepage' child={<h1>Hello Teacher</h1>} />} />
                <Route path='/teacher/create-class' element={
                    <StructureTeacher page_title='Create Class' child={<CreateClass />} />} />
                <Route path='/teacher/myClasses' element={
                    <StructureTeacher page_title='My Classes' child={<MyClasses />} />} />
                <Route path='/teacher/myClasses/:_id' element={
                    <StructureTeacher active={true} page_title='Class' child={<ClassMenuTeacher />} />} />
                <Route path='/teacher/myClasses/:_id/past-summaries' element={
                    <StructureTeacher page_title='Past Summaries' active={true} child={<PastSummaries />} />} />
                <Route path='/teacher/myClasses/:_id/student-attendance' element={
                    <StructureTeacher page_title='Student Attendance' active={true} child={<StudentAttendance />} />} />
                <Route path='/teacher/settings/:_id/' element={
                    <StructureTeacher page_title='Edit Profile' child={<EditProfile />} />} />
                <Route path='/teacher/myClasses/:_id/evaluations' element={
                    <StructureTeacher page_title='Evaluations' active={true} child={<Evaluations />} />} />
            </Route>

            {/** STUDENT */}
            <Route element={user && <RequireAuth allowedRole={student} user={user} />}>
                <Route path='/student' element={<StructureStudent page_title='Homepage' child={<h1>Hello Student!</h1>} />} />
                <Route path='/student/myClasses' element={
                    <StructureStudent page_title='My Classes' child={<MyClassesStudent />} />} />
                <Route path='/student/myClasses/:_id' element={
                    <StructureStudent page_title='Class' active={true} child={<ClassMenuStudent />} />} />
                <Route path='/student/myClasses/:_id/submitted-evaluations' element={
                    <StructureStudent page_title='Submitted Evaluations' active={true} child={<SubmittedEvaluations />} />} />
                <Route path='/student/myClasses/:_id/past-summaries' element={
                    <StructureStudent page_title='Past Summaries' active={true} child={<PastSummariesStudent />} />} />
                <Route path='/student/settings/:_id/' element={
                    <StructureStudent page_title='Edit Profile' child={<EditProfile />} />} />
            </Route>

            {/* 404 create a new component here*/}
            <Route path='*' element={<Lost />} />

        </Routes >
    );
}
