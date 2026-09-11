import { Certificate, certificatesData } from "@/lib/data";
import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <section id="certificates" className="px-3 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold font-lora mb-10">Certification</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {certificatesData.map((c: Certificate) => (
            <CertificateCard key={c.title} certificateData={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
