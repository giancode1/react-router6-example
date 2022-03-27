import { Link, Route, Routes, useNavigate } from "react-router-dom";
//antes useNavigate era useHistory

export const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Logout</button>
            <br />
            <Link to="welcome">Welcome</Link>
            <Routes>
                <Route path="welcome" element={<p>Welcome</p>} />
            </Routes>
        </div>
    )
}
