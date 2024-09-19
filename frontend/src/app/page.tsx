"use client"
import { useEffect, useState } from 'react'
import Modal from '@/app/components/modal'
import ProtectedPage from '@/app/components/protectedPage'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleConfirm = () => {
    console.log('Confirmed!')
  }


  return (
    <ProtectedPage>
      <main className="min-h-screen p-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white p-3 rounded"
        >
          Open Modal
        </button>

        <Modal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          title="Deactivate Account"
          description="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
          onConfirm={handleConfirm}
          error=""
        />
      </main>
    </ProtectedPage>
  )
}
