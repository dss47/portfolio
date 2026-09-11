
import { Certificate } from "@/lib/data";
import Image from "next/image";
import { BookIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";


type CertificateCardProps = {
    certificateData: Certificate;
};

export default function CertificateCard({ certificateData }: CertificateCardProps) {

    return (
        <div className="relative group border border-zinc-800 w-full bg-zinc-900/75 flex flex-col md:justify-start h-full gap-4 p-4 transition-all duration-200 hover:scale-101 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 transform-gpu">
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-zinc-500 transition-colors duration-300 group-hover:border-white" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-zinc-500 transition-colors duration-300 group-hover:border-white" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-zinc-500 transition-colors duration-300 group-hover:border-white" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-zinc-500 transition-colors duration-300 group-hover:border-white" />
            <Image
                src={certificateData.imageUrl}
                alt={certificateData.title}
                width={400}
                height={400}
                className="w-full h-48 aspect-video rounded-xl object-cover shrink-0"
            />

            <div className="w-full flex flex-col gap-2.5 ">
                <div className="flex items-start justify-between min-h-[3.5rem] gap-2">
                    <h2 className="text-xl font-bold">{certificateData.title}</h2>
                    <span className="text-xs text-zinc-400">{certificateData.date}</span>
                </div>

                {certificateData.src && (
                    <a
                        href={certificateData.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-auto gap-1 text-m text-zinc-400 hover:text-white transition-colors"
                    >
                        <BookIcon size={14} />
                        <span>Show Document</span>
                        <ArrowUpRight size={13} />
                    </a>
                )}
            </div>
        </div>
    );
}
