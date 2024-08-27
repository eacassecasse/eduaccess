import React from "react";


function Footer() {
    return (
        <footer className="flex items-center justify-between px-6 py-4 bg-slate-100">
            <div className="copyright">&copy; 2024 EduAccess</div>
            <ul className="flex flex-row flex-nowrap gap-2 list-none">
                <li className="border"><a href="#">Privacy Policy</a></li>
                <li className="border"><a href="#">Terms of Service</a></li>
                <li className="border"><a href="#">Contact Us</a></li>
            </ul>
        </footer>
    );
}

export default Footer;