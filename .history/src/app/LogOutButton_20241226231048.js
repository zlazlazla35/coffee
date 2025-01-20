"use client";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


export default function LoginButton() {
    return (
        <button>
            <FontAwesomeIcon icon={faUser} onClick={() => { signIn(); }}></FontAwesomeIcon>
        </button>
    )
}