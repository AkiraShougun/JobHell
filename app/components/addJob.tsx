"use client";
import { useState } from "react";
import { addJob } from "../actions/addJob";

const AddJob = () => {
  return (
    <>
      <form action={addJob}>
        <input type="text" placeholder="Title" name="title" required></input>
        <input type="text" placeholder="Link" name="link" required></input>
        <input
          type="text"
          placeholder="Company"
          name="company"
          required
        ></input>
        <input
          type="text"
          placeholder="Location"
          name="location"
          required
        ></input>
        <input
          type="text"
          placeholder="Website"
          name="website"
          required
        ></input>
        <button>Add Job</button>
      </form>
    </>
  );
};

export default AddJob;
