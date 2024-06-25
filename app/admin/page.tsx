"use client";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AlertDialog from "@/components/Alert/AlertDialog";
import Toast from "@/components/Alert/Toast";
import CustomizedTables from "@/components/CustomizedTables";
import useDeleteBox from "@/hooks/useDeleteBox";
import { useDeleteData, useFetchData } from "@/hooks/useResponsequery";
import useSnackbar from "@/hooks/useSnackbar";

const Admin = () => {
  const { open, message, openDelete, deleteId } = useDeleteBox();
  const {
    open: openSnack,
    message: snackMessage,
    openSnackBar,
    type,
  } = useSnackbar();
  const { data: enquiryList, refetch } = useFetchData({
    key: "enquiry",
    url: "enquiry",
  });

  const {
    mutate: deleteEnquiry,
    isSuccess,
    isError,
    error,
  } = useDeleteData({
    key: "enquiry",
    url: "enquiry",
  });

  useEffect(() => {
    if (isSuccess) {
      refetch();
      openSnackBar("Deleted Successfully!", "success");
    } else if (isError) {
      console.error(error);
      openSnackBar("Retry!", "error");
    }
  }, [isSuccess, isError]);

  const handleDelete = (confirm: boolean) => {
    if (confirm) {
      deleteEnquiry(deleteId);
    }
    openDelete("", false, null);
  };

  return (
    <Container className="py-5">
      <AlertDialog
        title="Delete Confirmation"
        open={open}
        message={message}
        deleteBranches={handleDelete}
      />
      <Toast open={openSnack} message={snackMessage} type={type} />
      <p className="text-3xl mt-5 sm:mt-0 md:mt-0">Mail List</p>
      <CustomizedTables List={enquiryList?.enquiry} handleDelete={openDelete} />
    </Container>
  );
};

export default Admin;
