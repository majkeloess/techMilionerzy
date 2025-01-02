export function BlurredCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative backdrop-blur-sm bg-white/10 p-8 rounded-xl border border-white/20 shadow-lg mx-4">
      {children}
    </div>
  );
}
