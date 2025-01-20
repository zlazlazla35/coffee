"use client";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export default function LoginButton() {
    return (
        <button className="loginBtn" onClick={() => { signIn(); }}>
            로그인
        </button>
    )
}