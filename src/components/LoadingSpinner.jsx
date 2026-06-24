"use client";

import { Spinner } from "@heroui/react";



export default function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Spinner size="lg" label="Loading..." />
    </div>
  );
}