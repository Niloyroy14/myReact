import React from "react";
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Hello</h1>
            <p>This is Home Page</p>
            <Outlet/>
        </div>
    );
}