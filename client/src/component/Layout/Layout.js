import React from "react";
import Auxil from "../../hoc/Auxil";
import Toolbar from "../Navigation/Toolbar/Toolbar";
//layout css?

const layout = (props) => (
    <Auxil>
        <Toolbar 
            logoutbtn={props.logoutbtn} 
            newbtn={props.newbtn}
<<<<<<< HEAD
            signbtn={props.signbtn}
=======
>>>>>>> c352ff4ec9dc0dafca4bcad84a0961376f29aefb
        />   
        <main>
            {props.children}
        </main>
    </Auxil>
);
  
export default layout;