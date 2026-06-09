import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.04),transparent_50%)]" />
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <Navbar />
        <main className="flex-1 overflow-auto mt-16 scroll-smooth">
          <div className="dashboard-content max-w-7xl mx-auto w-full px-6 py-6 grid gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
