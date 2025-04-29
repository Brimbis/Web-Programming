import '../styles/App.css';

export default function LoadingBar({type}) {
    if (type === 'loading') {
        return (
            <div className="min-h-screen w-full bg-gray-800 flex items-center justify-center px-4">
                <div className="text-blue-100 font-sans flex flex-col items-center max-w-4xl w-full">
                    <h1 className="text-2xl mb-4">Fetching Info...</h1>
                    <div className="w-64 h-2 bg-blue-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 animate-pulse duration-500 ease-in-out w-full"></div>
                    </div>
                </div>
            </div>
        );
    } else if (type === 'failed') {
        return (
            <div className="min-h-screen w-full bg-gray-800 flex items-center justify-center px-4">
                <div className="font-sans text-blue-100 flex flex-col items-center max-w-4xl w-full">
                    <h1 className='text-3xl'>Failed to Fetch Data</h1>
                </div>
            </div>
        );
    }
}