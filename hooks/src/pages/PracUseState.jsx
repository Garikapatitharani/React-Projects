// import React, { useState } from 'react'

// export default function PracUseState() {
//   const [students,setStudents]=useState([
//     {name:'Tharani',Qualification:'BTech',City:'Anantapur'},
//     {name:'Karthik',Qualification:'Msc',City:'NewYork'},
//     {name:'Sandhya',Qualification:'MBA',City:'Bangalore'},
//     {name:'Ramesh',Qualification:'Degree',City:'Chennai'}
//   ])
//     function handleDetails(){
//       setStudents(prev=>
//         prev.map(student =>
//         student.name === 'Karthik'?{ ...student, Qualification: 'MCA' }:student
//       )
//     );
//     }

//   return (
//     <div className='bg-black text-white p-4'>
//       <h1 className='text-center '>Student Details</h1>
//       {students.map((student, index) => (
//         <div key={index} className='mb-4'>
//           <h2>{student.name}</h2>
//           <h3>{student.Qualification}</h3>
//           <h3>{student.City}</h3>
//       </div>
//       ))}
//       <button onClick={handleDetails}>Update Details</button>
//     </div>
//   )
// }




// import React, { useState } from 'react'

// export default function PracUseState() {
//   const [students, setStudents] = useState([
//     { name: 'Tharani', Qualification: 'BTech', City: 'Anantapur' },
//     { name: 'Karthik', Qualification: 'Msc', City: 'NewYork' },
//     { name: 'Sandhya', Qualification: 'MBA', City: 'Bangalore' },
//     { name: 'Ramesh', Qualification: 'Degree', City: 'Chennai' }
//   ]);

//   function handleDetails(nameToUpdate) {
//     setStudents(prev =>
//       prev.map(student =>
//         student.name === nameToUpdate
//           ? { ...student, Qualification: 'MCA' }
//           : student
//       )
//     );
//   }

//   return (
//     <div className='bg-black text-white p-4'>
//       <h1 className='text-center'>Student Details</h1>
//       {students.map((student, index) => (
//         <div key={index} className='mb-4'>
//           <h2>{student.name}</h2>
//           <h3>{student.Qualification}</h3>
//           <h3>{student.City}</h3>
//           <button onClick={() => handleDetails(student.name)}>Update Details</button>
//         </div>
//       ))}
//     </div>
//   );
// }




import React, { useState } from 'react';

function PracUseState() {
  const [students, setStudents] = useState([
    { name: 'Tharani', Qualification: 'BTech', City: 'Anantapur' },
    { name: 'Karthik', Qualification: 'Msc', City: 'NewYork' },
    { name: 'Sandhya', Qualification: 'MBA', City: 'Bangalore' },
    { name: 'Ramesh', Qualification: 'Degree', City: 'Chennai' }
  ]);

   const updatedData = {
    Tharani: { Qualification: 'MTech' ,City:'Bangalore'},
    Karthik: { Qualification: 'MCA' },
    Sandhya: { Qualification: 'BioTech', City: 'Hyderabad' },
    Ramesh: { Qualification: 'BSc Honours' }
  };

  function handleUpdate(nameToUpdate) {
    setStudents(prev =>
      prev.map(student =>
        student.name === nameToUpdate
          ? { ...student, ...updatedData[student.name] }
          : student
      )
    );
  }

  return (
    <div className='bg-black text-white p-4'>
      {console.log("PracUseState rendered")}
      <h1 className='text-center'>Student Details</h1>
      {students.map((student, index) => (
        <div key={index} className='mb-4 border p-3 rounded'>
          <h2>{student.name}</h2>
          <h3>{student.Qualification}</h3>
          <h3>{student.City}</h3>
          <button
            className='bg-green-500 px-4 py-2 mt-2 rounded hover:bg-green-600'
            onClick={() => handleUpdate(student.name)}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}
export default React.memo(PracUseState); // Using React.memo to prevent unnecessary re-renders
