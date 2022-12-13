import React , {useState}from 'react';
import '../styles/PostDataStyle.css'

const PostData = () => {
    const [fileName, UpdateFileName] = useState(' ')
    function displayFile(e) {
        // console.log(e.target)
        UpdateFileName(e.srcElement.files[0].name)
    }
    return(
        <>
        <div className="container2">
            <form method="*" encType="multipart/form-data">
                <div>
                    <input type="text" placeholder='No file choosen' />
                    {/* <p className="displayArea" placeholder='No file choosen'></p> */}
                    {/* <button><label htmlFor="postData" >choose file</label></button> */}
                    {/* <input type="file" id="postData" name="PostedData" onChange={(e) => displayFile(e)} accept=".png, .jpg, .jpeg" style={{display:'none'}}/> */}
                    <input type="file" id="postData" name="PostedData"  onChange={(e) => displayFile(e)} accept=".png, .jpg, .jpeg" />
                </div>
        <div>
            <input type="text" placeholder="Author" />
        </div>
        <div>
            <input type="text" placeholder="Location" />
        </div>
        <div>
        <input type="text" placeholder="Description" />

        </div>
            </form>
        </div>
        </>
    )
}

export default PostData;