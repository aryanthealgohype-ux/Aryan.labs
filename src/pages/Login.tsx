import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jfif";

const ALLOWED_EMAIL = "aryanthealgohype@gmail.com";
const ALLOWED_PASSWORD = "aryan11@1";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email.trim() === ALLOWED_EMAIL && password === ALLOWED_PASSWORD) {
      localStorage.setItem("auth", "true");
      navigate("/", { replace: true });
      window.location.assign("/");
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-background px-4 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium 3D background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#05060a]/80 via-[#0b1220]/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.2),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.25),transparent_45%)]" />
      </div>
      <div className="w-full max-w-md relative z-10">
        <div className="beam-border beam-border-soft rounded-2xl">
          <div className="bg-card/90 backdrop-blur-md rounded-2xl p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Login to access the website.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-primary/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                required
              />
              {error && (
                <div className="p-3 rounded-xl text-sm bg-red-500/10 text-red-500">
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="btn-3d text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
