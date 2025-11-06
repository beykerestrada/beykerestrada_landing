// components/Cases.tsx
import Section from "./Section";
import Card from "./Card";

export default function Cases() {
    const rows = [
        {
            title: "Company OS for a sales-led team",
            change: "Unified projects ; tasks ; CRM ; reporting",
            impact: "Weekly reporting time reduced by 60% ; onboarding time cut by 40%",
            stack: "Notion ; n8n ; Gmail ; HubSpot"
        },
        {
            title: "Automation backbone for lead routing",
            change: "Centralized intake ; dedupe ; enrichment ; SLA alerts",
            impact: "Lead response under 5 min ; manual work near zero",
            stack: "n8n ; Slack ; Google Sheets ; CRM"
        }
    ];

    return (
        <Section id="work" tone="surface">
            <div className="mb-6">
                <h2 className="h2">Selected work</h2>
                <p className="p-lg mt-2">Short case snapshots; context ; change ; impact.</p>
            </div>

            <div className="grid gap-6">
                {rows.map((c) => (
                    <Card key={c.title}>
                        <h3 className="text-xl font-semibold">{c.title}</h3>
                        <div className="mt-4 grid md:grid-cols-3 gap-6">
                            <div>
                                <div className="p-sm">What changed</div>
                                <div>{c.change}</div>
                            </div>
                            <div>
                                <div className="p-sm">Impact</div>
                                <div>{c.impact}</div>
                            </div>
                            <div>
                                <div className="p-sm">Stack</div>
                                <div>{c.stack}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
