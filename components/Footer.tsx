import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row justify-center w-1/1">
        <footer className="flex flex-row justify-between items-center border-t border-gray-800 w-3/4">
            <p className="text-gray-500 font-lexend-mega text-xs mt-3">© 2026 Saad El-Assali</p>
            <Link href="#" className="text-xl text-gray-500 font-bold font-staatliches px-3 text-left mt-3">
                dss.
            </Link>
        </footer>
        </div>
    );
}
