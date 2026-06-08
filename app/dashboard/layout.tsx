import { Sidebar } from '@/components/sidebar'
import { Navbar } from '@/components/navbar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64">
        <Navbar />
        <main className="flex-1 overflow-auto mt-16">
          <div className="dashboard-content max-w-7xl mx-auto w-full px-6 py-6 grid gap-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
