/**
 * mockStudentData.js
 *
 * All student portal data lives here as plain arrays/objects, shaped
 * the way a real API response will eventually look. Pages import
 * from this file directly for now. When a backend exists, this file
 * gets replaced by calls into services/api.js — the components that
 * consume this data won't need to change, because they already just
 * receive arrays of objects with these same keys.
 */

export const currentStudent = {
  id: 'STU/2026/001',
  firstName: 'John',
  lastName: 'Doe',
  fullName: 'John Doe',
  email: 'john.doe@aldergate.edu',
  phone: '(555) 019-2231',
  dateOfBirth: '1998-04-12',
  gender: 'Male',
  address: '118 Willow Street, Ashcombe, NY 12345',
  program: 'Master of Divinity',
  department: 'Pastoral Studies',
  level: 'Year 2',
  admissionYear: '2024',
  academicSession: '2025/2026',
  currentSemester: 'Second Semester',
  avatarUrl:
    'https://ui-avatars.com/api/?name=John+Doe&background=1B2A4A&color=FAF6EC&size=128',
};

export const dashboardStats = {
  currentGPA: 3.72,
  registeredCourses: 6,
  outstandingFees: 450,
  completedCourses: 24,
};

export const courses = [
  {
    id: 'c1',
    code: 'THEO 501',
    title: 'Systematic Theology I',
    units: 3,
    lecturer: 'Dr. Eleanor Marsh',
    status: 'registered',
  },
  {
    id: 'c2',
    code: 'BIBL 512',
    title: 'Hebrew Exegesis',
    units: 3,
    lecturer: 'Rev. Dr. Samuel Okoro',
    status: 'registered',
  },
  {
    id: 'c3',
    code: 'HIST 430',
    title: 'The Reformation Era',
    units: 2,
    lecturer: 'Dr. Grace Lindqvist',
    status: 'registered',
  },
  {
    id: 'c4',
    code: 'PRAC 470',
    title: 'Homiletics & Preaching',
    units: 3,
    lecturer: 'Rev. Daniel Whitfield',
    status: 'available',
  },
  {
    id: 'c5',
    code: 'ETHI 505',
    title: 'Pastoral Ethics',
    units: 2,
    lecturer: 'Dr. Eleanor Marsh',
    status: 'available',
  },
  {
    id: 'c6',
    code: 'COUN 440',
    title: 'Foundations of Christian Counseling',
    units: 3,
    lecturer: 'Dr. Grace Lindqvist',
    status: 'registered',
  },
];

export const payments = [
  {
    id: 'p1',
    reference: 'PAY-2026-0091',
    feeType: 'Tuition \u2014 Spring Term',
    description: 'Spring Term Tuition Installment',
    amount: 1200,
    date: '2026-01-15',
    status: 'Paid',
  },
  {
    id: 'p2',
    reference: 'PAY-2026-0074',
    feeType: 'Library Fee',
    description: 'Annual Library Access Fee',
    amount: 60,
    date: '2025-11-02',
    status: 'Paid',
  },
  {
    id: 'p3',
    reference: 'PAY-2026-0103',
    feeType: 'Tuition \u2014 Spring Term',
    description: 'Spring Term Tuition Balance',
    amount: 450,
    date: '\u2014',
    status: 'Outstanding',
  },
];

export const feeSummary = {
  totalFees: 1710,
  amountPaid: 1260,
  outstandingBalance: 450,
};

export const receipts = [
  {
    id: 'r1',
    receiptNumber: 'RCT-2026-0091',
    description: 'Spring Term Tuition Installment',
    amount: 1200,
    date: '2026-01-15',
    status: 'Paid',
  },
  {
    id: 'r2',
    receiptNumber: 'RCT-2025-0074',
    description: 'Annual Library Access Fee',
    amount: 60,
    date: '2025-11-02',
    status: 'Paid',
  },
];

export const results = [
  { id: 'res1', code: 'THEO 401', title: 'Introduction to Systematic Theology', units: 3, score: 88, grade: 'A', gradePoint: 4.0 },
  { id: 'res2', code: 'BIBL 402', title: 'New Testament Greek II', units: 3, score: 79, grade: 'B+', gradePoint: 3.5 },
  { id: 'res3', code: 'HIST 330', title: 'Early Church History', units: 2, score: 84, grade: 'A-', gradePoint: 3.7 },
  { id: 'res4', code: 'PRAC 370', title: 'Introduction to Pastoral Care', units: 2, score: 91, grade: 'A', gradePoint: 4.0 },
];

export const resultSummary = {
  semesterGPA: 3.72,
  cgpa: 3.68,
  totalUnits: 10,
};

export const notifications = [
  {
    id: 'n1',
    title: 'Fee Payment Deadline Approaching',
    message: 'The outstanding balance for Spring Term is due by February 15, 2026.',
    date: '2026-01-28',
    read: false,
  },
  {
    id: 'n2',
    title: 'Second Semester Results Published',
    message: 'Your results for the second semester are now available on the Results page.',
    date: '2026-01-20',
    read: false,
  },
  {
    id: 'n3',
    title: 'Course Registration Closes Soon',
    message: 'Course registration for next term closes on February 1, 2026.',
    date: '2026-01-18',
    read: true,
  },
  {
    id: 'n4',
    title: 'Library Extended Hours',
    message: 'The library will have extended hours during exam week.',
    date: '2026-01-10',
    read: true,
  },
];
