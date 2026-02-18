import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Book Your Appointment - Ivories Dental Clinic",
    description:
        "Get in touch with Ivories Dental Clinic in Ahmedabad. Book your consultation for dental implants, root canal, braces, and more. Concierge dental care scheduling.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
