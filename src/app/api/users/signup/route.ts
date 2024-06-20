import connectToDatabase from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';


// Ensure the database connection is established
await connectToDatabase();

export async function POST(NextRequest : any) {
  try {
    const reqBody = await NextRequest.json();
    const { username, email, password } = reqBody;

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash the password
    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    console.log("User created successfully");
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser: newUser,
    }, { status: 201 });

  } catch (error : any) {
    console.error(error);
    return NextResponse.json({ message: error.message, success: false }, { status: 500 });
  }
}
