import {useState} from 'react'

const useSession = () => {
    const [isLogin,setIsLogin]=useState(false);
    const userDetails = JSON.parse(localStorage.getItem("userDetail")) || {};
    console.log(isLogin);
    return{
        isLogin,setIsLogin,userDetails
    }
}

export default useSession;
