import { useParams } from "react-router-dom"

export const UserPage = () => {
  const params = useParams()
  return (
    <div>
        User: <span>{params.id}</span>
    </div>
  )
}
