const Button = ({ children, className, ...props }) => {
    return (
      <button
        className={`inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
};
  
export default Button