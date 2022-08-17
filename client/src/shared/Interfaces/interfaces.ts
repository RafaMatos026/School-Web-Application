interface IClass {
  _id: string;
  ClassName: string;
  Subject: string;
  HeadTeacher: string;
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

interface IAttendance {
  Presence: boolean;
  Student: string;
  Date: Date;
}

export type {
  IClass,
  ISummary,
  ISubject,
  ITeacher,
  IStudent,
  IAddSummary,
  IAttendance,
};
