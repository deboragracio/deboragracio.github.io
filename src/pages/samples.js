import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const samples = [
  {
    title: 'REST API documentation sample',
    status: 'Planned independent project',
    description:
      'A fictional invoicing API with an overview, authentication guidance, endpoint reference, request and response examples, and error handling.',
    note: 'This will be an original learning sample, not a reproduction of employer documentation.',
  },
  {
    title: 'SaaS user guide',
    status: 'Planned independent project',
    description:
      'A task-oriented guide for a fictional SaaS product, covering first-time setup, configuration, and common workflows.',
  },
  {
    title: 'Troubleshooting article',
    status: 'Planned independent project',
    description:
      'A structured troubleshooting article showing symptoms, causes, diagnostic steps, and resolution guidance.',
  },
  {
    title: 'Technical workflow diagram',
    status: 'Planned independent project',
    description:
      'A system or integration workflow using Mermaid, accompanied by explanatory text and clearly defined actors.',
  },
];

export default function Samples() {
  return (
    <Layout title="Writing samples" description="Original technical writing samples by Débora Gracio.">
      <main className="container pageContent">
        <p className="eyebrow">WRITING SAMPLES</p>
        <h1>Practical examples of technical communication.</h1>
        <p className="lead">
          These independent samples will demonstrate my approach to structuring
          information and explaining software concepts. They are being developed
          specifically for this portfolio and do not contain confidential
          employer material.
        </p>
        <div className="sampleList">
          {samples.map((sample, index) => (
            <article className="sampleItem" key={sample.title}>
              <span className="sampleIndex">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="sampleStatus">{sample.status}</p>
                <h2>{sample.title}</h2>
                <p>{sample.description}</p>
                {sample.note && <p className="sampleNote">{sample.note}</p>}
              </div>
            </article>
          ))}
        </div>
        <p className="backLink"><Link to="/">← Back to homepage</Link></p>
      </main>
    </Layout>
  );
}