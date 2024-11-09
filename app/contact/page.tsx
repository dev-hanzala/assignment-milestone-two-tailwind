export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="my-4">
        You can reach me at{" "}
        <a
          href="mailto:hanzala-waseem@proton.me"
          className="text-blue-500 hover:underline"
        >
          hanzala-waseem@proton.me
        </a>
        .
      </p>
      <p className="my-4">
        You can also find me on LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/dev-hanzala/"
          className="text-blue-500 hover:underline"
        >
          Hanzala Waseem
        </a>
        .
      </p>
    </div>
  );
}
