// pages/index.js
import StudentCard from "./components/StudentCard";

export default function Page() {
  const students = [
    { name: "Wali Zafri", age: 19, rollNumber: "1234567", className: "Quarter 2" },
    { name: "Jane Smith", age: 17, rollNumber: "8912345", className: "Quarter 2" },
    { name: "Michael Johnson", age: 22, rollNumber: "6789012", className: "Quarter 2" },
  ];

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mt-6 mb-6">Student ID Cards</h1>
      <div className="flex justify-center items-center flex-wrap">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            className={student.className}
          />
        ))}
      </div>
    </div>
  );
}
