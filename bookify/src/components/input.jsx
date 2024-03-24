 const Input = ({ className, ...props }) => {
    return (
      <input
        className={`block w-full rounded-md p-2 border border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${className}`}
        {...props}
      />
    );
 };
  
 export default Input