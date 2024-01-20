import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"

function GptApp() {


  return (
    <RouterProvider router={router} />
  )
}

export default GptApp
