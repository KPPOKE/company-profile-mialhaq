import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "PPDB Online",
  description: "Placeholder page for the online admissions destination.",
};

export default function PpdbPage() {
  return (
    <main className="min-h-screen bg-surface py-20">
      <Container className="max-w-3xl">
        <div className="rounded-lg border border-emerald-100 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase text-primary">
            PPDB Online
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-text">Halaman PPDB placeholder</h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Halaman ini menjadi tujuan sementara untuk tombol pendaftaran online.
          </p>
          <div className="mt-8">
            <Button href="/" variant="outline" className="rounded-full">
              Kembali ke beranda
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
