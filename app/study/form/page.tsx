'use client';
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const {register} = useForm()

  console.log(register("user"))
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}