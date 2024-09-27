// components/Header.jsx
function Header() {
    return (
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Overview</h1>
        <div className="flex items-center">
          <input type="text" placeholder="Search" className="mr-4 p-2 border rounded" />
          {/* Add user profile icon */}
        </div>
      </header>
    )
  }
  
  export default Header