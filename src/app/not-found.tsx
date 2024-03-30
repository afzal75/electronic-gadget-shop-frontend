import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-red-100">
            <div className="text-center">
                <h1 className="mb-4 text-6xl font-semibold text-red-700">404</h1>
                <p className="mb-4 text-lg text-gray-600">
                    Oops! Looks like you're lost.
                </p>
                <p className="mt-4 text-gray-600">
                    Let's get you back{" "}
                    <Link href="/" className="text-blue-500">
                        home
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFound;
