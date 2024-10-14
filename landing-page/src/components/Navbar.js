function Navbar() {
    return (
        <header className="text-gray-600 body-font bg-gray-800 text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Festore.sr%2F&psig=AOvVaw3K7ay8z-sW-y2Z9ZiOQQCz&ust=1728999455202000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjN2IX_jYkDFQAAAAAdAAAAABAK"
                        className="w-10 h-10 text-white rounded-full"
                    />
                    <span className="ml-3 text-xl text-white">eStore</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap  justify-center text-base">
                    <a className="mr-5 hover:font-bold">Home</a>
                    <a className="mr-5 hover:font-bold">About</a>
                    <a className="mr-5 hover:font-bold">Services</a>
                    <a className="mr-5 hover:font-bold">Contact</a>
                </nav>
            </div>
        </header>

    );
}

export default Navbar;