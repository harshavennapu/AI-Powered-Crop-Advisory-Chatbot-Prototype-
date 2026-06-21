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
        <h2 className="text-xl font-bold mb-4">
          Modal Component
        </h2>

        <Button onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal>
    </div>
  );
}