import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
 //import { InterviewProvider } from "./features/interview/interview.context.jsx"
 import { InterviewProvider } from "./style/interview.context.jsx";
//import { InterviewProvider } from "./features/interview/style/interview.context.jsx";

function App() {

  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
