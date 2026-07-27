// // // // import { useContext, useEffect } from "react";
// // // // import { AuthContext } from "../auth.context";
// // // // import { login, register, logout, getMe } from "../services/auth.api";

// // // // export const useAuth = () => {
// // // //     const context = useContext(AuthContext);
    
// // // //     if (!context) {
// // // //         throw new Error("useAuth must be used within an AuthProvider");
// // // //     }

// // // //     const { user, setUser, loading, setLoading } = context;

// // // //     const handleLogin = async ({ email, password }) => {
// // // //         setLoading(true);
// // // //         try {
// // // //             const data = await login({ email, password });
// // // //             if (data?.user) setUser(data.user);
// // // //         } catch (err) {
// // // //             console.error(err);
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleRegister = async ({ username, email, password }) => {
// // // //         setLoading(true);
// // // //         try {
// // // //             const data = await register({ username, email, password });
// // // //             if (data?.user) setUser(data.user);
// // // //         } catch (err) {
// // // //             console.error(err);
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleLogout = async () => {
// // // //         setLoading(true);
// // // //         try {
// // // //             await logout();
// // // //             setUser(null); // Global state null ho jayegi
// // // //             window.location.href = "/login"; // Logout hote hi login page pr bej do
// // // //         } catch (err) {
// // // //             console.error(err);
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         const getAndSetUser = async () => {
// // // //             try {
// // // //                 const data = await getMe();
// // // //                 if (data?.user) {
// // // //                     setUser(data.user);
// // // //                 }
// // // //             } catch (err) {
// // // //                 setUser(null);
// // // //             } finally {
// // // //                 setLoading(false);
// // // //             }
// // // //         };

// // // //         getAndSetUser();
// // // //     }, [setUser, setLoading]);

// // // //     return { user, loading, handleRegister, handleLogin, handleLogout };
// // // // };
// // // import { getAllInterviewReports, generateInterviewReport, getInterviewReportById, generateResumePdf } from "../services/interview.api";
// // // import { useContext, useEffect } from "react";
// // // // import { InterviewContext } from "../../../style/interview.context";
// // // import { ... } from "../../interview/services/interview.api.js";
// // // import { useParams } from "react-router";

// // // export const useInterview = () => {
// // //     const context = useContext(InterviewContext);
// // //     const { interviewId } = useParams();

// // //     if (!context) {
// // //         throw new Error("useInterview must be used within an InterviewProvider");
// // //     }

// // //     const { loading, setLoading, report, setReport, reports, setReports } = context;

// // //     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile });
// // //             if (response?.interviewReport) {
// // //                 setReport(response.interviewReport);
// // //                 return response.interviewReport;
// // //             }
// // //         } catch (error) {
// // //             console.error("Error generating report:", error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //         return null;
// // //     };

// // //     const getReportById = async (id) => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await getInterviewReportById(id);
// // //             if (response?.interviewReport) {
// // //                 setReport(response.interviewReport);
// // //                 return response.interviewReport;
// // //             }
// // //         } catch (error) {
// // //             console.error("Error getting report by ID:", error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //         return null;
// // //     };

// // //     const getReports = async () => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await getAllInterviewReports();
// // //             if (response?.interviewReports) {
// // //                 setReports(response.interviewReports);
// // //                 return response.interviewReports;
// // //             }
// // //         } catch (error) {
// // //             console.error("Error fetching interview reports:", error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //         return [];
// // //     };

// // //     const getResumePdf = async (interviewReportId) => {
// // //         setLoading(true);
// // //         try {
// // //             const response = await generateResumePdf({ interviewReportId });
// // //             if (response) {
// // //                 const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }));
// // //                 const link = document.createElement("a");
// // //                 link.href = url;
// // //                 link.setAttribute("download", `resume_${interviewReportId}.pdf`);
// // //                 document.body.appendChild(link);
// // //                 link.click();
// // //                 link.remove();
// // //             }
// // //         } catch (error) {
// // //             console.error("Error generating PDF:", error);
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     useEffect(() => {
// // //         if (interviewId) {
// // //             getReportById(interviewId);
// // //         } else {
// // //             getReports();
// // //         }
// // //     }, [interviewId]);

// // //     return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf };
// // // };
// // import { useContext, useEffect } from "react";
// // import { useParams } from "react-router";
// // import { 
// //     getAllInterviewReports, 
// //     generateInterviewReport, 
// //     getInterviewReportById, 
// //     generateResumePdf 
// // } from "../services/interview.api";
// // import { InterviewContext } from "../../../style/interview.context";

// // export const useInterview = () => {
// //     const context = useContext(InterviewContext);
// //     const { interviewId } = useParams();

// //     if (!context) {
// //         throw new Error("useInterview must be used within an InterviewProvider");
// //     }

// //     const { loading, setLoading, report, setReport, reports, setReports } = context;

// //     const generateReport = async ({ jobDescription, selfDescription, resumeFile }) => {
// //         setLoading(true);
// //         try {
// //             const response = await generateInterviewReport({ jobDescription, selfDescription, resumeFile });
// //             if (response?.interviewReport) {
// //                 setReport(response.interviewReport);
// //                 return response.interviewReport;
// //             }
// //         } catch (error) {
// //             console.error("Error generating report:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //         return null;
// //     };

// //     const getReportById = async (id) => {
// //         setLoading(true);
// //         try {
// //             const response = await getInterviewReportById(id);
// //             if (response?.interviewReport) {
// //                 setReport(response.interviewReport);
// //                 return response.interviewReport;
// //             }
// //         } catch (error) {
// //             console.error("Error getting report by ID:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //         return null;
// //     };

// //     const getReports = async () => {
// //         setLoading(true);
// //         try {
// //             const response = await getAllInterviewReports();
// //             if (response?.interviewReports) {
// //                 setReports(response.interviewReports);
// //                 return response.interviewReports;
// //             }
// //         } catch (error) {
// //             console.error("Error fetching interview reports:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //         return [];
// //     };

// //     const getResumePdf = async (interviewReportId) => {
// //         setLoading(true);
// //         try {
// //             const response = await generateResumePdf({ interviewReportId });
// //             if (response) {
// //                 const url = window.URL.createObjectURL(new Blob([response], { type: "application/pdf" }));
// //                 const link = document.createElement("a");
// //                 link.href = url;
// //                 link.setAttribute("download", `resume_${interviewReportId}.pdf`);
// //                 document.body.appendChild(link);
// //                 link.click();
// //                 link.remove();
// //             }
// //         } catch (error) {
// //             console.error("Error generating PDF:", error);
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     useEffect(() => {
// //         if (interviewId) {
// //             getReportById(interviewId);
// //         } else {
// //             getReports();
// //         }
// //     }, [interviewId]);

// //     return { loading, report, reports, generateReport, getReportById, getReports, getResumePdf };
// // };
// import { useContext } from "react";
// import { AuthContext } from "../services/auth.context.jsx"; // Check your context path
// import { login as loginApi, register as registerApi, logout as logoutApi, getMe as getMeApi } from "../services/auth.api";

// export const useAuth = () => {
//     const context = useContext(AuthContext);

//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }

//     const { user, setUser, loading, setLoading } = context;

//     const login = async (credentials) => {
//         setLoading(true);
//         try {
//             const data = await loginApi(credentials);
//             if (data?.user) {
//                 setUser(data.user);
//             }
//             return data;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const register = async (userData) => {
//         setLoading(true);
//         try {
//             const data = await registerApi(userData);
//             if (data?.user) {
//                 setUser(data.user);
//             }
//             return data;
//         } finally {
//             setLoading(false);
//         }
//     };

//     const logout = async () => {
//         setLoading(true);
//         try {
//             await logoutApi();
//             setUser(null);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return { user, setUser, loading, login, register, logout };
// };
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login as loginApi, register as registerApi, logout as logoutApi, getMe as getMeApi } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    const { user, setUser, loading, setLoading } = context;

    const login = async (credentials) => {
        setLoading(true);
        try {
            const data = await loginApi(credentials);
            if (data?.user) {
                setUser(data.user);
            }
            return data;
        } finally {
            setLoading(false);
        }
    };

    const register = async (userData) => {
        setLoading(true);
        try {
            const data = await registerApi(userData);
            if (data?.user) {
                setUser(data.user);
            }
            return data;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            await logoutApi();
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const getMe = async () => {
        setLoading(true);
        try {
            const data = await getMeApi();
            if (data?.user) {
                setUser(data.user);
            }
            return data;
        } finally {
            setLoading(false);
        }
    };

    return { user, setUser, loading, login, register, logout, getMe };
};