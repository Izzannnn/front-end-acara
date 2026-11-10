import { useState } from "react"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

const registerSchema = yup.object().shape({
    fullname: yup.string().required("Please input your Fullname"),
    username: yup.string().required("Please input your Username"),
    email: yup.string().email("Email format not valid").required("Please input your Email"),
    password: yup.string().min(8, "Minimal 8 Characters").required("Please input your Password"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Password not match").required("Please input your Password Confirmation"),
})

const useRegister = () => {
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        passwordConfirmation: false,
    });

    const handleVisiblePassword = (key: "password" | "passwordConfirmation") => {
        setVisiblePassword({
            ...visiblePassword,
            [key]: !visiblePassword[key],
        })
    };

    const {register, handleSubmit, formState, reset, setError} = useForm({
        resolver: yupResolver(registerSchema)
    })

    return { 
        visiblePassword,
        handleVisiblePassword
    }
}

export default useRegister