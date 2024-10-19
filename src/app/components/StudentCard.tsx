type CardInfo = {
  name: string;
  age: number; 
  rollNumber: string;
  className: string;
};

export default function StudentCard({ name, age, rollNumber, className }: CardInfo) {
  return (
    <div className="w-[420px] rounded-xl h-60 shadow-md mx-5 flex justify-around items-center">
      <div className="w-40 h-40 bg-black text-white flex items-center justify-center text-center">Any Image <br /> Here</div>
      <div className="flex justify-center flex-col items-start">
        <h2 className="text-3xl">{name}</h2>
        <p className="">Age: {age}</p>
        <p className="">Roll Number: {rollNumber}</p>
        <p className="">Class: {className}</p>
      </div>
    </div>
  );
}
