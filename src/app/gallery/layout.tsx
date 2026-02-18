import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Smile Gallery | Smile Transformations - Ivories Dental Clinic",
    description:
        "Explore our gallery of successful smile transformations. From dental implants to orthodontics, see the life-changing results at Ivories Dental Clinic in Ahmedabad.",
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
