"use client";

export default function BookPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Book Page</h1>
      <p className="text-lg">This is the book page. Customize this content as needed.</p>
    </div>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}