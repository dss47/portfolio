import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row justify-center w-full px-4">
        <footer className="flex flex-row justify-between items-center border-t border-gray-800 w-full max-w-6xl py-4">
            <p className="text-gray-500 font-lexend-mega text-[10px] sm:text-xs">© 2026 Saad El-Assali</p>
            <Link href="#" className="text-lg sm:text-xl text-gray-500 font-bold font-staatliches px-2">
                dss.
            </Link>
        </footer>
        </div>
    );
}
