"use client";

import { useTranslations } from "./TranslationProvider";

export default function Workflows() {
    const dictionary = useTranslations();
    const workflows = dictionary.workflows;

    return (
        <section className="section-pad-lg method-section">
            <div className="container">
                <span className="section-badge">{workflows.badge}</span>
                <h2 className="section-title">{workflows.title}</h2>
                <p className="section-subtitle">{workflows.intro}</p>

                <div className="method-steps">
                    {workflows.steps.map((item, idx) => (
                        <div key={idx} className="method-step">
                            <h3 className="step-title">{item.title}</h3>
                            <p className="step-description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
