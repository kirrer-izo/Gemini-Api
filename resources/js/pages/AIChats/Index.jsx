import React from "react";
import AppLayout from "../Layouts/AppLayout";
import { Head } from "@inertiajs/react";

const Index  = () => {

    return(
        <>
        <Head title="AI Chat" />
        <div className="flex flex-col h-screen">
            <form action="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>

        </>
    )
}

Index.layout = page => <AppLayout children={page} title="AI Chat" />
export default Index;
