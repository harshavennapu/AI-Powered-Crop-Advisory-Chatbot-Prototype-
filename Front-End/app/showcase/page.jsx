"use client";

import { useState } from "react";

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
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-white">
        UI Components Showcase
      </h1>

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
  );
}