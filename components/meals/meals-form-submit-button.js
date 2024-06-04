"use client";
import { useFormStatus } from "react-dom";
export default function MealsFormSubmitButton() {
  const { pending } = useFormStatus();
  if (!pending) return <button>Share Meal</button>;
  return <button disabled>Submitting...</button>;
}
