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
import { RequireAuth } from '../auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';


/*After i implement the login part i will know which type of user is logged in and then i can know which routes should be rendered */

/* There are some components that could be shared */

export const AppRoutes = () => {

    return (
        <Routes>
            {/** ADMIN */}
            <Route path='/admin' element={
                <RequireAuth>
                    <StructureAdmin child={<h1>Hello Admin</h1>} />
                </RequireAuth>} />
            <Route path='/admin/registration-requests'
                element={<RequireAuth>
                    <StructureAdmin child={<RegistrationRequests />} />
                </RequireAuth>} />
            <Route path='/admin/create-student' element={
                <RequireAuth>
                    <StructureAdmin child={<CreateStudent />} />
                </RequireAuth>
            } />
            <Route path='/admin/create-class' element={
                <RequireAuth>
                    <StructureAdmin child={<CreateClass />} />
                </RequireAuth>
            } />
            <Route path='/admin/class-list' element={<RequireAuth>
                <StructureAdmin child={<ClassList />} />
            </RequireAuth>} />
            <Route path='/admin/student-list' element={<RequireAuth>
                <StructureAdmin child={<StudentList />} />
            </RequireAuth>} />
            <Route path='/admin/teacher-list' element={<RequireAuth>
                <StructureAdmin child={<TeacherList />} />
            </RequireAuth>} />
            <Route path='/admin/request/:_id' element={<RequireAuth>
                <StructureAdmin child={<RequestForm />} />
            </RequireAuth>} />
            <Route path='/admin/class/:_id' element={<RequireAuth>
                <StructureAdmin child={<ClassMenuAdmin />} />
            </RequireAuth>} />
            <Route path='/admin/class/:_id/assign-students'
                element={<RequireAuth>
                    <StructureAdmin child={<AssignStudent />} />
                </RequireAuth>} />
            <Route path='/admin/class/:_id/assigned-students'
                element={<RequireAuth>
                    <StructureAdmin child={<AssignedStudents />} />
                </RequireAuth>} />
            <Route path='/admin/class/:_id/assign-teachers'
                element={<RequireAuth>
                    <StructureAdmin child={<AssignTeacher />} />
                </RequireAuth>} />
            <Route path='/admin/class/:_id/assigned-teachers'
                element={<RequireAuth>
                    <StructureAdmin child={<AssignedTeachers />} />
                </RequireAuth>} />

            <Route path='/admin/class/:_id/edit' element={<RequireAuth>
                <StructureAdmin child={<EditClass />} />
            </RequireAuth>} />
            <Route path='/admin/disabled-class-list' element={<RequireAuth>
                <StructureAdmin child={<DisabledClasses />} />
            </RequireAuth>} />
            <Route path='/admin/disabled-student-list' element={<RequireAuth>
                <StructureAdmin child={<DisabledStudents />} />
            </RequireAuth>} />
            <Route path='/admin/disabled-teacher-list' element={<RequireAuth>
                <StructureAdmin child={<DisabledTeachers />} />
            </RequireAuth>} />

            {/** TEACHER */}
            <Route path='/teacher' element={<StructureTeacher child={<h1>Hello Teacher</h1>} />} />
            <Route path='/teacher/create-class' element={<StructureTeacher child={<CreateClass />} />} />
            <Route path='/teacher/myClasses' element={<StructureTeacher child={<MyClasses />} />} />
            <Route path='/teacher/myClasses/:_id'
                element={<StructureTeacher child={<ClassMenuTeacher />} />} />
            <Route path='/teacher/myClasses/:_id/past-summaries'
                element={<StructureTeacher child={<PastSummaries />} />} />
            <Route path='/teacher/myClasses/:_id/student-attendance'
                element={<StructureTeacher child={<StudentAttendance />} />} />

            {/** STUDENT */}
            <Route path='/student' element={<StructureStudent child={<h1>Hello Student!</h1>} />} />
            <Route path='/student/myClasses' element={<StructureStudent child={<MyClassesStudent />} />} />
            <Route path='/student/myClasses/:_id'
                element={<StructureStudent child={<ClassMenuStudent />} />} />
            <Route path='/student/myClasses/:_id/submitted-evaluations'
                element={<StructureStudent child={<SubmittedEvaluations />} />} />
            <Route path='/student/myClasses/:_id/past-summaries'
                element={<StructureStudent child={<PastSummariesStudent />} />} />

            {/** LOGIN - REGISTER */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/* 404 */}
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    );
}