'use client'
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser } from "./redux/storeSlice";


const Header = () => {
const dispatch = useDispatch()
    const {data:session} = useSession();
    console.log(session?.user)

    if(session === undefined) return <div>Loading...</div>

  if(session) dispatch(addUser(session?.user))
    
  return (
    <div>
      <Link href={"/"}>
        {" "}
        <li>Home</li>
      </Link>
      {
        session?.user && <p>Hi, {session?.user?.name}</p>
      }
     {
        !session?.user ?  <Link href={"/signin"} onClick={() => signIn()}>
        {" "}
        <li>signIn</li>
      </Link>
      :
      <p onClick={() => signOut()} className="cursor-pointer">Logout</p>
     }
    </div>
  );
};

export default Header;
