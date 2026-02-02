const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-900 border-t border-slate-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-slate-400 text-sm text-center">
                        &copy; {currentYear} Joel García Manjón - Portfolio. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://github.com/joelgarciaman" className="text-slate-500 hover:text-indigo-400 transition-colors" target="_blank">GitHub</a>
                        <a href="https://www.linkedin.com/in/joel-garcía-manjón-1aa370181" className="text-slate-500 hover:text-indigo-400 transition-colors" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
