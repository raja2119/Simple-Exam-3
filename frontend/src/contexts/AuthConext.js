import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../api/simpleExamBackend";
import { useThemeContext } from "./ThemeContext";

const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const { showAlert } = useThemeContext();
  const [currentUser, setCurrentUser] = useState(null);
  const [examId, setExamId] = useState(null);
  const [marks, setMarks] = useState(0);
  //   const [loading, setLoading] = useState(true);

  //   const userRegister = (email, password) => {
  //     try {
  //       const credentialPromise = auth.createUserWithEmailAndPassword(
  //         email.trim(),
  //         password.trim()
  //       );
  //       return credentialPromise;
  //     } catch (err) {
  //       console.log("error while userRegister", err);
  //     }
  //   };
  const userLogin = async (email, password) => {
    return api
      .post("/users/login", {
        email: email.trim(),
        password: password.trim(),
      })
      .then((res) => {
        if (res.data.success == true) {
          console.log(res.data);
          // setCurrentUser
          localStorage.setItem("user", res.data.data.name);
          return res.data.data;
        } else {
          showAlert(res.data.message, "error");
          console.log(res.data);
        }
      })
      .catch((err) => {
        return err;
      });
  };

  const questionSets = async () => {
    return api
      .get("/questions-sets")
      .then((res) => {
        if (res.data.success == true) {
          console.log(res.data);
          // setCurrentUser
          return res.data.data;
        } else {
          showAlert(res.data.message, "error");
          console.log(res.data);
        }
      })
      .catch((err) => {
        return err;
      });
  };
  //   const userLogout = () => {
  //     try {
  //       const logoutPromise = auth.signOut();
  //       return logoutPromise;
  //     } catch (err) {
  //       console.log("error while userLogout", err);
  //     }
  //   };
  //   const userForgotPassword = (email) => {
  //     try {
  //       const forgotPasswordPromise = auth.sendPasswordResetEmail(email.trim());
  //       return forgotPasswordPromise;
  //     } catch (err) {
  //       console.log("error while userForgotPassword", err);
  //     }
  //   };

  //   const updateEmail = (email) => {
  //     try {
  //       const updateEmailPromise = currentUser.updateEmail(email.trim());
  //       return updateEmailPromise;
  //     } catch (err) {
  //       console.log("error updating email", err);
  //     }
  //   };
  //   const updatePassword = (password) => {
  //     try {
  //       const updateEmailPromise = currentUser.updatePassword(password.trim());
  //       return updateEmailPromise;
  //     } catch (err) {
  //       console.log("error updating password", err);
  //     }
  //   };

  //   const checkUserRoleAsAdmin = async (email) => {
  //     const checkUserRole = functions.httpsCallable("auth-checkUserRoleAsAdmin");
  //     try {
  //       const result = await checkUserRole({ email: email });
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const createUserWithRoleAsAdmin = async (data) => {
  //     const createUserWithRole = functions.httpsCallable(
  //       "auth-createUserWithRoleAsAdmin"
  //     );
  //     try {
  //       const result = await createUserWithRole({
  //         email: data.email,
  //         password: data.password,
  //         displayName: data.displayName,
  //         // phoneNumber: data.phoneNumber,
  //         role:data.role
  //       });
  //       console.log(result);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     const unsubscribe = auth.onAuthStateChanged(
  //       (user) => {
  //         // user.getIdToken(true)
  //         if (user) {
  //           setCurrentUser(user);
  //           auth.currentUser
  //             .getIdTokenResult(true)
  //             .then((idTokenResult) => {
  //               // Confirm the user is an Admin.
  //               if (idTokenResult.claims.role) {
  //                 // Show admin UI.
  //                 setCurrentUserRole(idTokenResult.claims.role);
  //                 // console.log(idTokenResult, user);
  //               } else {
  //                 // Show regular user UI.
  //                 console.log(`no idtoken claim`);
  //               }
  //             })
  //             .catch((error) => {
  //               console.log(error);
  //             });
  //         } else {
  //           setCurrentUser(null);
  //         }

  //         // console.log(user);
  //         setLoading(false);
  //       },
  //       (err) => {
  //         console.log(err, "error auth state change");
  //       }
  //     );
  //     // unsubscribe is a method
  //     return () => {
  //       unsubscribe();
  //     };
  //   }, []);
  const value = {
    userLogin,
    questionSets,
    examId,
    setExamId,
    setMarks,
    marks,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, useAuthContext };
