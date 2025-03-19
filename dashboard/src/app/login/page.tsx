import LoginForm from "@/components/modules/login/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-background">
      <div className="bg-card p-8 rounded-lg shadow-lg border border-border w-full max-w-2xl">
        {" "}
        <h1 className="text-2xl font-bold text-foreground mb-6 text-center">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
