export default function UserProfile({params}:any) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
            <div className="text-center space-y-4">
                <h1 className="text-8xl text-white font-semibold">Hello {params.id}!!  </h1>
                <p className="text-3xl text-white font-light">Welcome to your profile </p>
            </div>
        </div>
    )
}