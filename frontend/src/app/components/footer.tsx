import Link from "next/link";
import React from "react";


function Footer() {
    return (
        <footer className="flex items-center justify-between px-6 py-4 bg-slate-100">
            <div className="copyright">&copy; 2024 EduAccess</div>
            <ul className="flex flex-row flex-nowrap gap-2 list-none">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Service</Link></li>
                <li><Link href="#">Contact Us</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;