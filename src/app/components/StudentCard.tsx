// components/StudentCard.jsx

interface{
  name: 
}

export default function StudentCard({ name, age, rollNumber, className }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mx-auto my-4">
        <div className="flex flex-col items-center">
          <div className="bg-gray-200 rounded-full h-24 w-24 mb-4"></div> {/* Placeholder for profile image */}
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">Roll Number: {rollNumber}</p>
          <p className="text-gray-600">Class: {className}</p>
        </div>
      </div>
    );
  }
  