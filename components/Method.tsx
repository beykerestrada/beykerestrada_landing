// components/Method.tsx
"use client";

import { useTranslations } from "./TranslationProvider";

export default function Method() {
    const dictionary = useTranslations();
    const method = dictionary.method;

    return (
        <section className="section-pad-lg method-section">
            <div className="container">
                <span className="section-badge">{method.title}</span>
                <h2 className="section-title">{method.intro}</h2>

                <div className="method-steps">
                    {method.steps.map((step, idx) => (
                        <div key={idx} className="method-step">
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
