import "../css/userProfile.css"
import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import Menu from "./menu";
import { collection, getDocs ,updateDoc,doc} from "firebase/firestore";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { async } from "@firebase/util";


const UserProfile = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [cellphone, setcellphone] = useState('')
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const userCollectionRef = collection(db, "users")

        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(
                data.docs.map((doc) => ({
                    name: doc.data().name,
                    cellphone: doc.data().cellphone,
                    userId: doc.data().userId,
                    email: doc.data().email,
                    surname: doc.data().surname,
                }))
            );
        }
        getUsers();
    }, []);

    let user = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].userId === auth.currentUser.uid) {
            user.push(users[i]);

        }
        console.log(user)
        console.log(auth.currentUser.uid)

   
    }

    // console.log(auth.currentUser.uid)
    // console.log(booking);
    //updating user
    const handleEditProfile = async (id, name) => {
        document.querySelector(".edit").style.display = "block";
    }
    const close = () => {
        document.querySelector(".edit").style.display = "none";
    }

    // const updateProfileDetails=(()=>{
    //     const hotelDoc = doc(db, "users");
    //     const newUserDetails={
    //         name:name,
    //         surname:surname,
    //         cellphone:cellphone,
    //         email:email

    //     }
    // })



    return (
        <div className="profile-contianer">
            <Menu />
            {user.map((inf, id) =>
            (
                <div className="profile" key={id}>

                    <div className="right-div">
                    <h2 className="editProfile"
                                onClick={(e) => handleEditProfile(inf.id, inf.name)}>
                                <FontAwesomeIcon icon={faPen} /> Edit Profile</h2>
                        <div className="edit" style={{display:'none'}}>
                            
                                <h2 className="close" onClick={close}>
              x
            </h2>{" "}
            <br></br>
            <h2>Editing {inf.name}</h2>
            <br></br>
            <input
              placeholder="Name"
              value={inf.name}
              onChange={(e) => setName(e.target.value)}
            ></input>{" "}
            <br></br>
            <input
            placeholder="Surname"
            value={inf.surname}
            onChange={(e) => setSurname(e.target.value)}
            />
            <br></br>
            <input
             
             value={inf.cellphone}
              placeholder="cellphone"
              onChange={(e) => setcellphone(e.target.value)}
            ></input>{" "}
            <br></br> <input
             value={inf.email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>{" "}
            <br></br> 
            <br></br>
            <br></br>
            <br></br>

            {/* <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleChange}
            />*/}
            <button
              className="btn-update"
            
            >
              Update
            </button> 
                        </div>
                        <div className="username"><h3>{inf.name}</h3></div>
                        <div className="username"><h3>{inf.surname}</h3></div>
                        <div className="username"><h3>{inf.email}</h3></div>
                        <div className="username"><h3>{inf.cellphone}</h3>
                        </div>

                     


                    </div>

                </div>
            ))}


        </div>
    );
};

export default UserProfile;
