interface IClass {
  _id: string;
  ClassName: string;
  Subject: string;
  HeadTeacher: string;
  Status: boolean;
}

interface IMyClasses {
  _id: string;
  ClassName: string;
  HeadTeacher: {
    _id: string;
    FName: string;
    LName: string;
  };
  Subject: {
    _id: string;
    Description: string;
  };
  Status: boolean;
}

interface IStudent {
  _id: string;
  FName: string;
  LName: string;
  Email: string;
  Status: boolean;
}

interface ISummary {
  _id: string;
  Description: string;
  Date: Date;
}

interface ISubject {
  _id: string;
  Description: string;
}

interface ITeacher {
  _id: string;
  FName: string;
  LName: string;
  Email: string;
  Status: boolean;
  Birthday: Date;
}

interface IAddSummary {
  Description: string;
  Date: Date;
  classId: string;
}

interface ISurvey {
  _id: string;
  Date: Date;
  AbsentStudents: string[];
  PresentStudents: string[];
  open: boolean;
}

export type {
  IClass,
  ISummary,
  ISubject,
  ITeacher,
  IStudent,
  IAddSummary,
  ISurvey,
  IMyClasses,
};
