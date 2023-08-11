"use client";
import "@/app/components/containers/container-form.css";
import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/image";
import React, { useState } from "react";
import lista from "@/app/assets/lista.png";
import { useRouter } from "next/navigation";
import Input_text from "@/app/components/form/input_text";
import { httpPost } from "@/app/core/http-contract-request";
import { handleInput } from "@/app/core/repository/handleInput";
import Button_primary from "@/app/components/form/button_primary";
import { loginBody, validateLoginBody } from "@/app/core/repository/login/login_body";

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState(loginBody);

  React.useEffect(() => {
    validateSesion();
  }, []);

  const validateSesion = () => {
    if (sessionStorage.getItem("user") != undefined) {
      router.push("/Home");
    }
  };

  const validateLogin = async () => {
    let validation = validateLoginBody(values);
    if (typeof validation === "string") { alert(validation);} 
    else {
      httpPost("users/login", values)
        .then((response) => {
            sessionStorage.setItem("user", response.name);
        }).catch((err) => { console.log(err); });
        validateSesion();
      }
    };

  return (
    <div className="container">
      <div className="marca">
        <Image src={lista} alt="Logo" className="logo mb-4" />
      </div>
      <form className="form-control container-form">
        <h1>Login</h1>
        <Input_text hint="Email" type="email" id="email" handleInput={[handleInput, values, setValues]} />
        <br />
        <Input_text hint="Password" type="password" id="password" handleInput={[handleInput, values, setValues]} />
        <br />
        <Button_primary texto="Start" callback={() => { validateLogin() }} />
        <Link href={"/Register"}>Create new account</Link>
      </form>
    </div>
  );
}
