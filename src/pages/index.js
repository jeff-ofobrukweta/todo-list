import React from "react";
import { Route, Routes } from 'react-router-dom';
import NoMatch from "../pages/NoMatch/index";
import App from "./App";
import SingleTodo from "./singleTodo";

export default function Index() {
    return (
        <div className="Index">
            <Routes>
                {/* todo route  */}
                <Route path="/" element={<App />} />
                {/* single todo route */}
                <Route path="/:todo" element={<SingleTodo />} />
            </Routes>
        </div>
    );
}