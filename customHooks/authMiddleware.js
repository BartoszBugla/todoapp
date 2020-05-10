// import { useSelector } from "react-redux";
// import React, { useEffect } from "react";
// import Router from "next/router";
// export const Auth = (needAuth) => {
//     const isAuth = useSelector((state) => state.Auth.isAuthenticated);
//     if (needAuth) {
//         useEffect(() => {
//             if (!isAuth) Router.push("/");
//         }, [isAuth]);
//     } else if (!needAuth) {
//         useEffect(() => {
//             if (isAuth) Router.push("/dashboard");
//         }, [isAuth]);
//     } else {
//         return console.log("specify auth function");
//     }
// };
