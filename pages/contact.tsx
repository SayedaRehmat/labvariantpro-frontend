import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-primary mb-4">Contact</h1>
        <p className="text-gray-600">For sales, partnerships or support please email <a href="mailto:contact@labvariantpro.com" className="text-primary underline">contact@labvariantpro.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
