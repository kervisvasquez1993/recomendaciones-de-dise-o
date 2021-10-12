import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { logout } from "../../store/actions/authActions";
import { useUser } from "../../utils";

const Logout = () => {
    const dispatch = useDispatch();
    const user = useUser();

    useEffect(() => {
        dispatch(logout());
    }, []);

    if (user) {
        return null;
    }

    return <Redirect to="/" />;
};
export default Logout;
