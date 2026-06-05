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
        <main className="flex-1 overflow-auto mt-16 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
