import logo from "@/assets/logo.png";

const About = () => (
  <section id="about" className="py-20">
    <div className="container flex flex-col md:flex-row items-center gap-12">
      <div className="flex-shrink-0">
        <img src={logo} alt="Natiousline Investments" className="w-48 h-48 object-contain" />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          About <span className="text-primary">Natiousline</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
          Natiousline Investments is your trusted partner for all printing needs. We combine cutting-edge technology with creative expertise to deliver prints that stand out. From small business essentials to large-scale event materials, we bring your vision to life with precision and care.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-6">
          {[
            { num: "500+", label: "Happy Clients" },
            { num: "10K+", label: "Projects Done" },
            { num: "5+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold font-heading text-primary">{s.num}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
