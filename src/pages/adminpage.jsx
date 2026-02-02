import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen ">
            <div className="h-full w-[300px] flex col flex-col gap-4 p-4 ">
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <Link to="/admin/settings">Settings</Link>
            </div>
            <div className="h-full w-[calc(100%-300px)] bg-amber-900">
                <Routes path="/*">
                    <Route path="/users" element={<h1>Manage Users</h1>} />
                    <Route path="/products" element={<h1>Manage Products</h1>} />
                    <Route path="/orders" element={<h1>Manage Orders</h1>} />
                    <Route path="/settings" element={<h1>Admin Settings</h1>} />
                </Routes>
            </div>
        </div>
    )
}