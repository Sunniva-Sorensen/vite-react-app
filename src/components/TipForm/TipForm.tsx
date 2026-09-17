import { useState } from "react";
import "./TipForm.css";

interface TipData {
  name: string;
  email: string;
  phone: string;
  tip: string;
}

export function TipForm() {
  const [formData, setFormData] = useState<TipData>({
    name: "",
    email: "",
    phone: "",
    tip: "",
  });

  const [submitted, setSubmitted] = useState<TipData | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(formData);
  }

  return (
    <section className="tip-section">
      <h2>Send inn et tips</h2>

      <form className="tip-form" onSubmit={handleSubmit}>
        <label>
          Navn
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E‑post
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefon
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Tips
          <textarea
            name="tip"
            value={formData.tip}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Send inn</button>
      </form>

      {submitted && (
        <TipSummary data={submitted} />
      )}
    </section>
  );
}

function TipSummary({ data }: { data: TipData }) {
  return (
    <div className="tip-summary">
      <h3>Takk for tipset!</h3>
      <p><strong>Navn:</strong> {data.name}</p>
      <p><strong>E‑post:</strong> {data.email}</p>
      <p><strong>Telefon:</strong> {data.phone}</p>
      <p><strong>Tips:</strong> {data.tip}</p>
    </div>
  );
}
