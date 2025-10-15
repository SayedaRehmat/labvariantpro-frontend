export default function Footer() {
  return (
    <footer className="bg-gray-50 text-center py-6 mt-10 text-gray-600 text-sm">
      © {new Date().getFullYear()} LabVariant Pro | 
      <a href="/terms" className="underline mx-2">Terms</a> | 
      <a href="/privacy" className="underline mx-2">Privacy</a>
    </footer>
  );
}

