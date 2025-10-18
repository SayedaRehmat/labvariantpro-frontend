export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} LabVariant Pro · Powered by AutoBio-X</div>
        <div className="space-x-4">
          <a href="/privacy" className="underline">Privacy</a>
          <a href="/terms" className="underline">Terms</a>
          <a href="/contact" className="underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
