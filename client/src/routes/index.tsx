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
import AddSummary from '../views/Teacher/MyClasses/AddSummary';
import PastSummaries from '../views/Teacher/MyClasses/PastSummaries';
import SubmitEvaluation from '../views/Teacher/MyClasses/SubmitEvaluation';
import SubmitWork from '../views/Teacher/MyClasses/SubmitWork';
import StudentAttendance from '../views/Teacher/MyClasses/StudenAttendance';
import StructureStudent from '../views/Student/StructureStudent';
import MyClassesStudent from '../views/Student/MyClasses/MyClasses';
import ClassMenuStudent from '../views/Student/MyClasses/ClassMenu';
import MarkPresence from '../views/Student/MyClasses/MarkPresence';
import PastSummariesStudent from '../views/Student/MyClasses/PastSummaries';
import SubmitWorkStudent from '../views/Student/MyClasses/SubmitWork';
import SubmitJustification from '../views/Student/MyClasses/SubmitJustification';
import SubmittedEvaluations from '../views/Student/MyClasses/SubmittedEvaluations';


/*After i implement the login part i will know which type of user is logged in and then i can know which routes should be rendered */

/* There are some components that could be shared */

export const AppRoutes = () => {
    return (
        <Routes>
            {/** LOGIN - REGISTER */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            {/** ADMIN */}
            <Route path='/admin' element={<StructureAdmin child={<h1>Hello Admin</h1>} />} />
            <Route path='/admin/registration-requests'
                element={<StructureAdmin child={<RegistrationRequests />} />} />
            <Route path='/admin/create-student' element={<StructureAdmin child={<CreateStudent />} />} />
            <Route path='/admin/create-class' element={<StructureAdmin child={<CreateClass />} />} />
            <Route path='/admin/class-list' element={<StructureAdmin child={<ClassList />} />} />
            <Route path='/admin/student-list' element={<StructureAdmin child={<StudentList />} />} />
            <Route path='/admin/teacher-list' element={<StructureAdmin child={<TeacherList />} />} />
            <Route path='/admin/request/1' element={<StructureAdmin child={<RequestForm />} />} />
            <Route path='/admin/class/classId' element={<StructureAdmin child={<ClassMenuAdmin />} />} />
            <Route path='/admin/class/classId/assign-students'
                element={<StructureAdmin child={<AssignStudent />} />} />
            <Route path='/admin/class/classId/assigned-students'
                element={<StructureAdmin child={<AssignedStudents />} />} />
            <Route path='/admin/class/classId/assign-teachers'
                element={<StructureAdmin child={<AssignTeacher />} />} />
            <Route path='/admin/class/classId/assigned-teachers'
                element={<StructureAdmin child={<AssignedTeachers />} />} />

            <Route path='/admin/class/classId/edit' element={<StructureAdmin child={<EditClass />} />} />

            {/** TEACHER */}
            <Route path='/teacher' element={<StructureTeacher child={<h1>Hello Teacher</h1>} />} />
            <Route path='/teacher/create-class' element={<StructureTeacher child={<CreateClass />} />} />
            <Route path='/teacher/myClasses' element={<StructureTeacher child={<MyClasses />} />} />
            <Route path='/teacher/myClasses/classId'
                element={<StructureTeacher child={<ClassMenuTeacher />} />} />
            <Route path='/teacher/myClasses/classId/past-summaries'
                element={<StructureTeacher child={<PastSummaries />} />} />
            <Route path='/teacher/myClasses/classId/add-summary'
                element={<StructureTeacher child={<AddSummary />} />} />
            <Route path='/teacher/myClasses/classId/student-attendance'
                element={<StructureTeacher child={<StudentAttendance />} />} />
            <Route path='/teacher/myClasses/classId/submit-class-work'
                element={<StructureTeacher child={<SubmitWork />} />} />
            <Route path='/teacher/myClasses/classId/submit-evaluation'
                element={<StructureTeacher child={<SubmitEvaluation />} />} />

            {/** STUDENT */}
            <Route path='/student' element={<StructureStudent child={<h1>Hello Student!</h1>} />} />
            <Route path='/student/myClasses' element={<StructureStudent child={<MyClassesStudent/>} />} />
            <Route path='/student/myClasses/classId'
                element={<StructureStudent child={<ClassMenuStudent/>} />} />
            <Route path='/student/myClasses/classId/submit-class-work'
                element={<StructureStudent child={<SubmitWorkStudent/>} />} />
            <Route path='/student/myClasses/classId/submit-absence-justification'
                element={<StructureStudent child={<SubmitJustification/>} />} />
            <Route path='/student/myClasses/classId/submitted-evaluations'
                element={<StructureStudent child={<SubmittedEvaluations/>} />} />
            <Route path='/student/myClasses/classId/past-summaries'
                element={<StructureStudent child={<PastSummariesStudent/>} />} />
            <Route path='/student/myClasses/classId/mark-presence' element={<StructureStudent child={<MarkPresence/>} />} />

            {/* 404 */}
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    );
}