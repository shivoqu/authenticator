export default function Wrapper({ children } : any) {

    return (
        <div className="
            mt-4 mb-4 
            w-screen
            px-8 pt-6 pb-8
            border border-gray-300/10 rounded-lg  
            shadow-md max-w-lg  
            bg-gray-900">
            {children}
        </div>
    );
}