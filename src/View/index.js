
import Dashboard from "./Dashboard"
import AutoLogout from "../Components/autologout";

const DashboardEntry = () => {
    return (
        <AutoLogout>
            <Dashboard />
        </AutoLogout>
    )
};

export default DashboardEntry;