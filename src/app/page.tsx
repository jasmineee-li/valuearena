import Link from "next/link";

type EigenBenchRow = {
  model: string;
  survey: string;
  elo: number;
};

type EigenBenchCategory = {
  title: string;
  description: string;
  rows: EigenBenchRow[];
};

const eigenBenchResults: EigenBenchCategory[] = [
  {
    title: "Kindness Survey",
    description: "How warmly each model responds to human-centered prompts.",
    rows: [
      { model: "Gemini 2.5 Pro", survey: "7.00", elo: 1551 },
      { model: "Qwen 3", survey: "7.00", elo: 1538 },
      { model: "Grok 4", survey: "7.00", elo: 1484 },
      { model: "Kimi K2", survey: "6.88", elo: 1493 },
      { model: "GPT 4.1", survey: "6.50", elo: 1489 },
      { model: "Llama 4 Maverick", survey: "6.50", elo: 1435 },
      { model: "DeepSeek v3", survey: "6.25", elo: 1447 },
      { model: "Claude 4 Sonnet", survey: "6.13", elo: 1530 },
    ],
  },
  {
    title: "Conservatism Survey",
    description: "Preference for stability, institutions, and incremental change.",
    rows: [
      { model: "Grok 4", survey: "6.67", elo: 1529 },
      { model: "DeepSeek v3", survey: "6.00", elo: 1516 },
      { model: "GPT 4.1", survey: "6.60", elo: 1505 },
      { model: "Kimi K2", survey: "6.60", elo: 1439 },
      { model: "Qwen 3", survey: "6.30", elo: 1452 },
      { model: "Llama 4 Maverick", survey: "6.10", elo: 1514 },
      { model: "Gemini 2.5 Pro", survey: "5.80", elo: 1505 },
      { model: "Claude 4 Sonnet", survey: "4.80", elo: 1520 },
    ],
  },
  {
    title: "Ecology Survey",
    description: "Alignment with ecological stewardship and planet-first values.",
    rows: [
      { model: "Kimi K2", survey: "7.00", elo: 1603 },
      { model: "GPT 4.1", survey: "6.67", elo: 1450 },
      { model: "DeepSeek v3", survey: "6.67", elo: 1435 },
      { model: "Qwen 3", survey: "6.58", elo: 1526 },
      { model: "Grok 4", survey: "6.33", elo: 1426 },
      { model: "Llama 4 Maverick", survey: "6.17", elo: 1472 },
      { model: "Gemini 2.5 Pro", survey: "5.25", elo: 1530 },
      { model: "Claude 4 Sonnet", survey: "5.25", elo: 1482 },
    ],
  },
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10 lg:px-12">
      <header className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          EigenBench
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
          Compare frontier models on the values they express.
        </h1>
        <p className="text-lg leading-7 text-slate-600 sm:max-w-3xl">
          We rebuilt the EigenBench paper into an interactive leaderboard so you can inspect how
          kindness, conservatism, or ecological care show up across models. Jump into the live battle
          view whenever you want to gather fresh human ratings.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-500">
          <span className="rounded-full bg-white px-4 py-2 font-medium text-slate-600">
            Built for qualitative value audits
          </span>
          <a
            href="https://arxiv.org/pdf/2509.01938"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-500"
          >
            Read the EigenBench paper →
          </a>
          <Link
            href="/battle"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
          >
            Launch a Battle
          </Link>
        </div>
      </header>

      <section className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">EigenBench snapshots</h2>
            <p className="text-sm text-slate-500">
              Survey averages and Elo ratings straight from the original release.
            </p>
          </div>
          <p className="text-sm font-medium text-slate-600">Updated quarterly · static preview</p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {eigenBenchResults.map((category) => (
            <article
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>
                <p className="text-sm text-slate-500">{category.description}</p>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-slate-500">
                      <th className="py-2 pr-2 font-medium">Model</th>
                      <th className="px-2 py-2 text-right font-medium">Survey</th>
                      <th className="py-2 pl-2 text-right font-medium">EigenBench Elo</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {category.rows.map((row, index) => (
                      <tr
                        key={row.model}
                        className={index % 2 === 0 ? "bg-slate-50/60" : "bg-white"}
                      >
                        <td className="py-2 pr-4">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-semibold text-slate-400">
                              {index + 1}
                            </span>
                            <span className="font-medium text-slate-900">{row.model}</span>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-right font-semibold text-slate-700">
                          {row.survey}
                        </td>
                        <td className="py-2 pl-2 text-right font-semibold text-slate-900">
                          {row.elo}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Ready to rate?
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">Spin up a value battle.</h3>
            <p className="text-sm text-slate-600">
              Ask the community which answer leans toward your target value, then fold the vote into
              EigenBench stats.
            </p>
          </div>
          <Link
            href="/battle"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
          >
            Open battle workspace →
          </Link>
        </div>
      </section>
    </div>
  );
}
