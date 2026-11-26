import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="About Débora Gracio, Technical Writer.">
      <main className="container pageContent">
        <p className="eyebrow">ABOUT</p>
        <h1>Technical communication grounded in curiosity and collaboration.</h1>
        <p className="lead">
          I’m a Technical Writer with more than 15 years of experience working
          with software products and technology teams. My background spans
          enterprise cloud solutions, fintech, point-of-sale systems, SaaS,
          service management, and ERP environments.
        </p>
        <h2>How I work</h2>
        <p>
          I turn complex product and engineering information into structured,
          practical content. I collaborate with engineers, product managers,
          QA, UX, legal teams, and subject-matter experts to research, validate,
          write, review, and maintain documentation.
        </p>
        <p>
          My work includes product documentation, end-user guides, troubleshooting
          content, release notes, FAQs, knowledge bases, technical illustrations,
          localization coordination, and documentation-platform improvements.
        </p>
        <h2>Areas of experience</h2>
        <ul>
          <li>Developer and product documentation</li>
          <li>Docs-as-Code using Markdown, GitHub, and Docusaurus</li>
          <li>Cloud and enterprise software</li>
          <li>Fintech and fiscalization services</li>
          <li>Point-of-sale and operational software</li>
          <li>Content accessibility and localization workflows</li>
          <li>AI-assisted research and documentation workflows</li>
        </ul>
        <h2>Tools and technologies</h2>
        <p>
          Docusaurus · Markdown · GitHub · Visual Studio Code · Git · HTML · XML ·
          Figma · Inkscape · Sketch · Acrolinx · Confluence · Jira · Claude ·
          GitHub Copilot
        </p>
        <h2>Languages</h2>
        <p>Portuguese (fluent) · English (fluent) · Spanish (intermediate)</p>
        <p className="note">
          This portfolio is a work in progress. Individual case studies describe
          professional experience without reproducing confidential company
          documentation, internal screenshots, or proprietary technical details.
        </p>
      </main>
    </Layout>
  );
}