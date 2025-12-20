export default function PatientsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <h1 className="header">New Appointment</h1>

            <div className="h-screen max-h-screen">
                {children}
            </div>
        </>
    );
}       