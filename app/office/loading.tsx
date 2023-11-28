import LoadingSpinner from "@/components/shared/LoadingSpinner/LoadingSpinner";

export default function Loading() {
  return (
    <main className="flex center">
      <LoadingSpinner size="xl" light />
    </main>
  );
}
