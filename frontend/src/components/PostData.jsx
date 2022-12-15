import React , {useState}from 'react';
import axios from 'axios';
import '../styles/PostDataStyle.css';
import {useNavigate} from 'react-router-dom';
// import { useEffect } from 'react';


const PostData = () => {
    const [imageData, final] = useState('')
    const [name, finalauthor] = useState('')
    const [location, finallocation] = useState('')
    const [description, finaldesc] = useState('')
    const [imageName, finalimageName] = useState('')



    const navigate = useNavigate();
    // useEffect(() => {
        const handleSubmit = (e) =>{
            console.log('x')
            e.preventDefault();
            try{
                // axios.post('http://httpbin.org/post',intialData, {
                    const data = new FormData();
                    // data.append("intialData",JSON.stringify(intialData))
                    data.append("imageData",imageData)
                    data.append("name",name)
                    data.append("location",location)
                    data.append("imageName",imageName)

                    data.append("description",description)

                axios.post('http://localhost:3000/PostData',data)
                .then(res => console.log(res))
                .catch(err => console.log(err))
                // axios.post('http://localhost:3000/PostData',intialData)
                // .then(res => console.log(res))
                // .catch(err => console.log(err))

            } catch(err) {
                console.log(err);
            }
            navigate('/PostView'); 
        }
    // },[])

    return(
        <>
        <div className="container2">
{/* // In the form tag, the enctype attribute must be set to multipart/form-data, for Multer to work */}
{/* types of encoding - While multipart or form-data allows the files to be included in the form data, text/ plain sends the data as plain text without encoding. It is used for debugging and not for production. The application/x-www-form-urlencoded encodes the data as query string – separating key – value pairs assigned with “ = “ and other symbols like “&.” */}
            <form onSubmit={handleSubmit}>
{/* Also, in the form tag, we have specified the action attribute to #. This is because we haven’t made any API endpoint to receive the data from this form. we will create that in backend */}
                <div>
                    <input type="text" placeholder='No file choosen' />
                    <input type="file" id="postData"  onChange={e => { 
                        // finalData({...intialData, imageName: e.target.files[0].name},
                        // finalData({...intialData, e.target.files[0]},
                        finalimageName(e.target.files[0].name)
                        final(e.target.files[0])
                        } }
                            accept=".png, .jpg, .jpeg" />
                </div>
        <div>
            <input type="text" placeholder="Author" onChange={(e) => finalauthor(e.target.value)} />
        </div>
        <div>
            <input type="text" placeholder="Location" onChange={(e) => finallocation(e.target.value)}/>
        </div>
        <div>
        <input type="text" placeholder="Description" onChange={(e) => finaldesc( e.target.value)} />

        </div>
        {/* <Link to='/PostView'><button type="submit"  >Post</button></Link> */}
        <button type="submit" >Post</button>
        
            </form>
        </div>
        </>
    )
}


export default PostData;