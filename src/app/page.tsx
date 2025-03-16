export default function Home() {
  return (
    <div className="h-screen bg-background flex items-center justify-center">
      <h1 className="text-3xl font-bold underline text-primary">
        Hello world!
      </h1>
      <div>
        <div className="bg-primary size-4 border"></div>
        <div className="bg-primary-foreground size-4 border"></div>
        <div className="bg-background size-4 border"></div>
      </div>
    </div>
  );
}
