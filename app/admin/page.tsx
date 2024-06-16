"use client";
import CustomizedTables from "@/components/CustomizedTables";
import { useFetchData } from "@/hooks/useResponsequery";
import React from "react";
import { Container } from "react-bootstrap";

const Admin = () => {
  const { data: enquiryList } = useFetchData({
    key: "enquiry",
    url: "enquiry",
  });
  console.log(enquiryList);
  return (
    <Container className="py-5">
      <p className="text-3xl">Mail List</p>
      <CustomizedTables List={enquiryList?.enquiry} />
    </Container>
  );
};

export default Admin;
