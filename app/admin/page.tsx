"use client";
import CustomizedTables from "@/components/CustomizedTables";
import { useDeleteData, useFetchData } from "@/hooks/useResponsequery";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Admin = () => {
  const { data: enquiryList, refetch } = useFetchData({
    key: "enquiry",
    url: "enquiry",
  });
  const {
    mutate: DeleteEnquiry,
    data,
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
    } else if (isError) {
      console.log(error);
    }
  }, [isSuccess, isError]);

  const HandleDelete = (id: String) => {
    DeleteEnquiry(id);
  };
  return (
    <Container className="py-5">
      <p className="text-3xl">Mail List</p>
      <CustomizedTables
        List={enquiryList?.enquiry}
        handleDelete={HandleDelete}
      />
    </Container>
  );
};

export default Admin;
