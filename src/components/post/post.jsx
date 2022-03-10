import React from "react";
import './post.css'

function Post(){
    return(
        
        <div className="post">
            <img className="postImage"
             src="/images/postimg.jpg" alt="image" />
             <div className="postInfo">
                 <div className="postCats">
                     <span className="postCat">Music</span>
                     <span className="postCat">Life</span>
                     </div>
                     <span className="postTitle">Lorem ipsum dolor sit amet consectetur 
                     
                     </span>
                     <hr />
                     <span className="postDate">2 hour ago.</span>
                 </div>
                 <p className="postDesc">
                 Lorem ipsum dolor, sit amet consectetur 
                     adipisicing elit. Quaerat, sint assumenda
                      nesciunt officia recusandae dolorem ab pariatur
                       nostrum voluptate vero mollitia itaque autem 
                       eveniet cumque, numquam exercitationem provident!
                        Facilis, placeat!Lorem ipsum dolor, sit amet consectetur 
                     adipisicing elit. Quaerat, sint assumenda
                      nesciunt officia recusandae dolorem ab pariatur
                       nostrum voluptate vero mollitia itaque autem 
                       eveniet cumque, numquam exercitationem provident!
                        Facilis, placeat!</p>
        </div>
    )
}
export default Post;