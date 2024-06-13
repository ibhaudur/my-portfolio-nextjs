import { NextResponse } from "next/server";
import connectMangoDB from "../../../lib/mangodb";
import Enquiry from "../../../models/enquiry.model";

export const POST = async (req) => {
  const { name, email, description } = await req.json();
  await connectMangoDB();
  try {
    await Enquiry.create({ name, email, description });
    return NextResponse.json(
      { message: "Submited Successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
export const GET = async () => {
  await connectMangoDB();
  const enquiry = await Enquiry.find();
  return NextResponse.json({ enquiry });
};
