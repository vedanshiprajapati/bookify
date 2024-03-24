import {Link} from 'react-router-dom'

const Header = (props) => {
    const { HandleLoginPopup } = props;

   return ( <nav className="py-4 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href='/' className="text-blue-600 font-bold text-lg">Bookify</a>

           <div className='flex gap-3'>
           <Link 
              to="/home"
              className="text-blue-600 py-2 px-4 rounded-md hover:underline"
            >
              Home
            </Link>
            <div
                            onClick={HandleLoginPopup}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Login
            </div>
          </div>
        </div>
      </nav>
   )
}

export default Header