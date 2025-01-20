"use client";
import {  signOut } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'


export default function LogOutButton(){
    return(
        <FontAwesomeIcon icon={faUser} onClick={()=>{signOut();}}></FontAwesomeIcon>
    )
}