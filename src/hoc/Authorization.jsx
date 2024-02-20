import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const withAuthProtectionRedirect = (WrappedComponent) => {

    const AuthProtectedComponent = (props) => {

        const navigate = useNavigate();
        
        useEffect(() => {
            if (!localStorage.getItem('isAuthenticated')) {
                navigate('/signin')
            }
        }, [])

        return <WrappedComponent {...props} />
    }

    return AuthProtectedComponent;

}