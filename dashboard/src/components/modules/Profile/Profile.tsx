const Profile = () => {
  return (
    <div className="px-4 py-12 max-w-5xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome, Arko! 👋</h1>
        <p className="text-muted-foreground text-lg">
          This is your{" "}
          <span className="font-medium">Portfolio Management Dashboard</span>.
          Manage your projects, experiences, blogs, and skills — all in one
          place.
        </p>
      </div>

      <div className="grid auto-rows-min gap-6 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground font-semibold text-sm">
          Quick Stats
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground font-semibold text-sm">
          Latest Activity
        </div>
        <div className="aspect-video rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground font-semibold text-sm">
          Profile Summary
        </div>
      </div>

      <div className="rounded-xl bg-muted/50 p-6 text-center text-muted-foreground text-base">
        Ready to showcase your journey and achievements? Start adding your
        experiences, blogs, and skills today.
      </div>
    </div>
  );
};

export default Profile;
