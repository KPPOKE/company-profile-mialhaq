import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "SIA Login",
  description: "Placeholder page for the existing academic information system login.",
};

export default function LoginSiaPage() {
  return (
    <main className="min-h-screen bg-surface py-20">
      <Container className="max-w-3xl">
        <div className="rounded-lg border border-emerald-100 bg-white p-8 shadow-soft sm:p-12">
          <p className="text-sm font-semibold uppercase text-primary">
            SIA Login
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-text">Portal SIA placeholder</h1>
          <p className="mt-4 text-base leading-8 text-muted">
            Halaman ini disediakan sebagai tujuan tautan sementara untuk sistem informasi akademik yang sudah ada.
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
