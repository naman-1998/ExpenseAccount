import {useState} from 'react'

const useSession = (email,password) => {
    const [isLogin,setIsLogin]=useState(false);
    const userDetails = JSON.parse(localStorage.getItem("userDetail")) || {};
    return{
        isLogin,setIsLogin,userDetails
    }
}

export default useSession;
