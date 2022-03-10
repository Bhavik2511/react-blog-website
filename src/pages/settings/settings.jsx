import React from "react";
import SideBar from "../../components/sideBar/sideBar";
import "./settings.css";
function Settings(){
    return(
        <div className="settings">
           <div className="settingsWrapper">
               <div className="settingsTitle">
                   <span className="settingsUpdateTitle">Update Your Account</span>
                   <span className="settingsDeleteTitle">Delete Your Account</span>
                   </div>
                   <form  className="settingsForm">
                       <label >Profile picture</label>
                       <div className="settingsPP">
                           <img src="./images/headerimg.jpg" alt="" />
                           <label htmlFor="fileInput">
                           <i className="settingsPPIcon fas fa-user"></i>
                               </label>
                               <input type="file" id="fileInput" style={{display:"none"}}/>
                           </div>
                           <label >Username</label>
                           <input type="text" placeholder="Bhavik Sharma" />
                           <label >Email</label>
                           <input type="email" placeholder="bhavik@gmail.com" />
                           <label >Password</label>
                           <input type="password"/>
                           <label >Biodata</label>
                           <input type="text" placeholder="Bio" />
                           <label >Gender</label>
                           <input type="text" placeholder="Male or Female" />
                           <label >Hobbies</label>
                           <input type="text" placeholder="Hobbies" />
                           
                           <button className="settingsUpdate">Update</button>
                       </form>
               </div>
            <SideBar/>
        </div>
    )
}
export default Settings;