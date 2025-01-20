"use client";
import { signIn } from "next-auth/react";



export default function LoginButton(){
    return(
        <button className="loginBtn" onClick={()=>{signIn()}}>로그인</button>
    )
}