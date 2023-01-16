export default function Message({children,  type }: { children: React.ReactNode, type: "success" | "error"}) {
  return (
    // if type is error, style the children red and if type is success, style the children green
    <div className={
        `${type === "success" 
          ? "bg-green-500/10 border border-green-500/70 text-green-500/70" 
          : "bg-red-500/10 border border-red-500/70 text-red-500/70"} 
          rounded-md break-all px-4 whitespace-pre-wrap py-2 w-full text-md font-medium mb-4`}>
        {children}
    </div>

  );
}
