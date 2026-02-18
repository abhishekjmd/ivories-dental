import type { Metadata } from "next";
import DoctorsSection from "@/components/home/DoctorsSection";

export const metadata: Metadata = {
    title: "Our Doctors | Expert Dental Team at Ivories",
    description:
        "Meet our highly qualified and internationally trained dental specialists. Leading experts in Ahmedabad for advanced oral healthcare.",
};

export default function DoctorsPage() {
    return (
        <main className="bg-[#f7f6f8] text-[#200b3c]">
            <DoctorsSection />
        </main>
    );
}
