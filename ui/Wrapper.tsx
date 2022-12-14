export default function Wrapper({ children } : any) {

    return (
        <div className="mt-4 m-auto border border-gray-300/10 rounded-lg shadow-md max-w-lg px-8 pt-6 pb-8 mb-4 bg-gray-900">
            {children}
        </div>
    );
}