"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui";

export default function ShowcasePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="mx-auto flex-1 w-full max-w-6xl px-6 py-10">

        <h1 className="mb-8 text-4xl font-bold text-yellow-300">
          UI Components Showcase
        </h1>

        <div className="rounded-3xl border border-green-300/30 bg-white/10 p-8 shadow-2xl backdrop-blur-xl space-y-6">

          <Button onClick={() => setOpen(true)}>
            Open Modal
          </Button>

          <Input placeholder="Enter crop name" />

          <Loader />

          <Toast message="Success Toast" />

          <Modal isOpen={open}>
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Modal Component
            </h2>

            <p className="mb-6 text-gray-600">
              This is a reusable modal component demonstration.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="rounded-md bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
            >
              Close
            </button>
          </Modal>

        </div>

      </main>

      <Footer />
    </div>
  );
}