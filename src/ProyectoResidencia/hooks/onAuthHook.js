import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FirebaseAuth } from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../store/auth/authSlice";

export const onAuthHook = () => {
    const {status} = useSelector(state => state.auth)

    const [loadPage, setLoadPage] = useState( JSON.parse(localStorage.getItem('loadPage')) || {
        activitiesLiked: true,
        activitiesLearning: false,
        activitiesGenerics: false

    })
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('loadPage', JSON.stringify(loadPage));
    })


    useEffect(() => {
            onAuthStateChanged( FirebaseAuth, async(user) => {
            if(!user) return dispatch(logout());
            const {displayName, uid, photoURL, phoneNumber, email} = user;
            dispatch(login({displayName, uid, photoURL, phoneNumber, email}))

        })

    }, [])

    return{

        status,
        loadPage,
        setLoadPage
    }


}

