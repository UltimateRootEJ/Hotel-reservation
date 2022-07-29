// import { doc, onSnapshot } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { db } from "./firebase";



// export default function viewHotel() {

//   const [hotel, setHotel] = useState(null);


//   useEffect(() => {
//     const docRef = doc(db, "hotels", id);
//     onSnapshot(docRef, (snapshot) => {
//       setArticle({ ...snapshot.data(), id: snapshot.id });
//     });
//   }, []);
//   return (
//     <div className="container border bg-light" style={{ marginTop: 70 }}>
//       {hotel && (
//         <div className="row">
//           <div className="col-3">
//             <img
//               src={hotel.image}
//               alt={hotel.title}
//               style={{ width: "100%", padding: 10 }}
//             />
//           </div>
//           <div className="col-9 mt-3">
//             <h2>{hotel.title}</h2>
//             <h5>Author: {hotel.createdBy}</h5>
//             <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
//             <hr />
//             <h4>{article.description}</h4>

//             <div className="d-flex flex-row-reverse">
        
//               <div className="pe-2">
//                 <p>{article.likes.length}</p>
//               </div>
//             </div>
//             {/* comment  */}
    
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
