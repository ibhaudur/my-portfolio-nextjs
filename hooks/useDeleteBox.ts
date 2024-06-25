import React, { useState } from "react";

// Define the Deletetype interface for the function arguments
interface Deletetype {
  msg: string;
  bool: boolean;
  id: string;
}

// Define the return type of the custom hook
interface UseDeleteBoxReturn {
  open: boolean;
  message: string;
  openDelete: (msg: string, bool: boolean, id: string) => void;
  deleteId: string | null;
}

export default function useDeleteBox(): UseDeleteBoxReturn {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const openDelete = (msg: string, bool: boolean, id: string): void => {
    setMessage(msg);
    setOpen(bool);
    setDeleteId(id);
  };

  return { open, message, openDelete, deleteId };
}
