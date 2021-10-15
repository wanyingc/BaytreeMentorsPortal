export const mentorTypes = [ "Mentors", "Youth Mentors", "Into School Mentors", "Women Mentors" ]

export const columnsMentors = [ 
  {
      dataField: 'name',
      text: 'Name'
  },
  {
      dataField: 'lastSession',
      text: 'Last Session'
  },
  {
      dataField: 'attendence',
      text: 'Attendence'
  },
];
export const columnsMentees = [ 
  {
      dataField: 'name',
      text: 'Mentee Name'
  },
  {
      dataField: 'lastSession',
      text: 'Last Session'
  },
  {
      dataField: 'attendence',
      text: 'Attendance'
  },
];
export const columnsSessionsMentors = [
  {
      dataField: 'title',
      text: 'Session'
  }, 
  {
      dataField: 'mentor',
      text: 'Mentor'
  }, 
  {
      dataField: 'date',
      text: 'Date'
  }
];
export const columnsSessionsMentees = [
  {
      dataField: 'title',
      text: 'Session Name'
  }, 
  {
      dataField: 'person',
      text: 'Mentee Name'
  }, 
  {
      dataField: 'date',
      text: 'Date'
  }
];
export const columnsOverdueMentees = [
  {
      dataField: 'title',
      text: 'Item(s) Overdue'
  }, 
  {
      dataField: 'person',
      text: 'Mentee Name'
  }, 
  {
      dataField: 'date',
      text: 'Date'
  }
];