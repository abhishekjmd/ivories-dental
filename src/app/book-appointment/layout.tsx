import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment | Online Scheduling - Ivories Dental Clinic",
    description:
        "Schedule your dental visit online. Hassle-free appointment booking for premium dental care at Ivories Dental Clinic in Ahmedabad.",
};

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
