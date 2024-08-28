const students = [
  {
    id: 1,
    name: "길동",
  },
  {
    id: 2,
    name: "사또",
  },
  {
    id: 3,
    name: "임당",
  },
  {
    id: 4,
    name: "순신",
  },
];

function AttendanceBook(prps) {
  return (
    <ul>
      {students.map((student, index) => (
        // key : 리스트에서 유일한 키값
        <li key={student.id} id={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}
export default AttendanceBook;
