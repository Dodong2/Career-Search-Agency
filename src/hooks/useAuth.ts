import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerAcc, loginAcc } from "../services/AuthServices";

export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const navigate = useNavigate()

    //Register Hooks
    const register = async (username: string, email: string, password:string, profession: string) => {
        setLoading(true)
        setError(null)
        try {
            const result = await registerAcc(username, email, password, profession)
            if (result.success) {
                navigate('/test')
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('Registration failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    //Login Hooks
    const login = async (email:string, password:string) => {
        setLoading(false)
        setError(null)
        try {
            const result = await loginAcc(email, password)
            if (result.success) {
                navigate('/test')
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('Login failed. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return {register, login, loading, error  }

}