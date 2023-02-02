export default function Dev( {msg } : {msg ?: string}) {
    let message = 'In Development' || msg;
    let redirect = 'JWT page';
    return (
        <div className="w-full  my-32 min-h-full h-screen">
            <h1 className="text-white font-bold text-5xl text-center">{message}</h1>
            <h3 className="text-gray-300 my-12 text-3xl text-center">Make sure to check out the {redirect} in the meanwhile</h3>
        </div>
    )
}