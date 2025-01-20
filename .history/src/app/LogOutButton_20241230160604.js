"use client";
import {  signOut } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


export default function LoginButton() {
    return (
        <button className="loginBtn" onClick={() => { signOut(); }}>
            로그아웃
        </button>
    )
}