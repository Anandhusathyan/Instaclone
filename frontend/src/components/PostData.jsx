import React , {useState}from 'react';
import axios from 'axios';
import '../styles/PostDataStyle.css'

const PostData = () => {
    const [intialData, finalData] = useState({name:"", location:"", description:"", PostImage:"", data: new Date()})
    // const [state,UpdateFileName] = useState('')
    // function displayFile(e) {
    //     console.log('x')
    //     console.log(e.files)
    //     UpdateFileName(e.srcElement.files[0].name)
    // }
    // console.log(intialData)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            // axios.post('http://localhost:3001/PostData',intialData, {
            //     headers: {
            //         'Content-type' : 'multipart/form-data',
            //     },
            // }).then(res => console.log(res)).catch(err => {
            //     console.log(err,'s')})
            // console.log(intialData)
            await axios.post('http://localhost:3000/PostData',intialData).then(res => console.log(res)).catch(err => {
                console.log(err,'s')})
            console.log(intialData)
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <>
        <div className="container2">
{/* // In the form tag, the enctype attribute must be set to multipart/form-data, for Multer to work */}
{/* types of encoding - While multipart or form-data allows the files to be included in the form data, text/ plain sends the data as plain text without encoding. It is used for debugging and not for production. The application/x-www-form-urlencoded encodes the data as query string – separating key – value pairs assigned with “ = “ and other symbols like “&.” */}
            <form onSubmit={handleSubmit}>
{/* Also, in the form tag, we have specified the action attribute to #. This is because we haven’t made any API endpoint to receive the data from this form. we will create that in backend */}
                <div>
                    <input type="text" placeholder='No file choosen' />
                    {/* <p className="displayArea" placeholder='No file choosen'></p> */}
                    {/* <button><label htmlFor="postData" >choose file</label></button> */}
                    {/* <input type="file" id="postData" name="PostedData" onChange={(e) => displayFile(e)} accept=".png, .jpg, .jpeg" style={{display:'none'}}/> */}
                    {/* <input type="file" id="postData" name="PostedData" onChange={(e) => console.log(e.target.files[0].name)} accept=".png, .jpg, .jpeg"/> */}
                    <input type="file" id="postData" name="PostedData"  onChange={(e) => finalData({...intialData, PostImage: e.target.files[0].name})} accept=".png, .jpg, .jpeg" />
                </div>
        <div>
            <input type="text" placeholder="Author" onChange={(e) => finalData({...intialData, name: e.target.value})} />
        </div>
        <div>
            <input type="text" placeholder="Location" onChange={(e) => finalData({...intialData, location: e.target.value})}/>
        </div>
        <div>
        <input type="text" placeholder="Description" onChange={(e) => finalData({...intialData, description: e.target.value})} />

        </div>
        <button type="submit">Post</button>
            </form>
        </div>
        </>
    )
}

// let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         body: JSON.stringify(data),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setName("");
//         setEmail("");
//         setMessage("User created successfully");
//       } else {
//         setMessage("Some error occ
// else {
//         setMessage("Some error occured");
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
export default PostData;