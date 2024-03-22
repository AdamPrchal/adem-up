"use client";

import { useState } from "react";
import toast from "react-hot-toast";


export const ConsultationForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);
    const phone = formData.get("phone");
    const datetime = formData.get("datetime");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        body: JSON.stringify({
          phone,
          datetime,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("Your consultation request was submitted 👍.");
      } else {
        toast.error("Could not submit form. Please, try again later.");
      }
    } catch (err) {
      toast.error("Could not submit form. Please, try again later.");
    }
    setIsLoading(false);
  };

  return (
    <form action={handleSubmit} className="flex gap-2 md:flex-row flex-col">
      <label className="input input-bordered flex items-center text-white gap-2">
        <span className="text-accent">Phone</span>
        <input
          type="text"
          name="phone"
          className="grow"
          placeholder="+420123456789"
          required
        />
      </label>
      <label className="input input-bordered flex items-center text-white gap-2">
        <span className="text-accent">When</span>
        <input
          type="datetime-local"
          name="datetime"
          className="grow"
          min="2024-03-23T08:30"
          max="2024-12-30T16:30"
          required
        />
      </label>
      <button disabled={isLoading} type="submit" className="btn btn-accent">
        {isLoading && <span className="loading loading-spinner"></span>}
        Make reservation!
      </button>
    </form>
  );
};
