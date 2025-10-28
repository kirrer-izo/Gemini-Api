import React, { useState } from "react";
import AppLayout from "../../layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { Bot, CircleUser } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const Index  = () => {
    const [prompt, setPrompt] = useState("");

    const [messages, setMessages] = useState([
       {
        role: 'ai',
        content: 'Hello! How can I help you today?'
       },
    ]);

    const { data, setData, post, processing, errors } = useForm({
        prompt: ''
    })
    function submit(e) {
        e.preventDefault()
        post('/ai-chat')    
    }
    return(
        <>
        <Head title="AI Chat" />
        <div className="flex justify-center p-4 md:p-8 h-full">
            <Card className="flex flex-col w-full h-full shadow-lg">
                <CardHeader>
                    <CardTitle>Gemini AI Chat</CardTitle>
                </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto pr-2 space-y-4">
                <div className="flex items-start gap-3 justify-end">
                    <Avatar className="size-8">
                        <Bot></Bot>
                    </Avatar>
                    <div className="p-3 rounded-lg max-w-xs md:max-w-md">
                     <p>Ai reply</p>
                    </div>
                </div>

                <Avatar className="size-8">
                    <CircleUser></CircleUser>
                </Avatar>
            </CardContent>

            <Separator/>

            <CardFooter className="py-4">
                <form className="flex w-full items-center gap-3">
                    <textarea cols="50" className="bg-white dark:bg-gray-500 border-white rounded-md"
                    value={data.prompt}
                    onChange={e => setData('prompt', e.target.value)}
                    >
                    </textarea>
                    {errors.prompt && <div>{ errors.prompt }</div>}
                    <Button type="submit" size="lg">Send</Button>
                </form>
            </CardFooter>
            </Card>

        </div>

        </>
    )
}

Index.layout = page => <AppLayout children={page} title="AI Chat" />
export default Index;
