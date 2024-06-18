"use client"
import React from 'react'
import Link from 'next/Link'
import axios from 'axios'
import { useRouter } from 'next/router'


export default function SignupPage() {

    const [user, setUser] = React.useState({
        username: '',
        password: '',
        email: ''
    })

    const onSignup = async () => {
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        signup
                    </h2>
                </div>
                <input 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    id = "username"
                />
                <input 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="text" 
                    placeholder="email" 
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    id = "email"
                />
                <input 
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    id= "password"
                />
                <button
                  onClick={onSignup} 
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Signup here!!
                </button>
                <Link  className = " text-black flex justify-center py-2 px-4 "href="/login">Already a user </Link>
            </div>
        </div>
    )
}