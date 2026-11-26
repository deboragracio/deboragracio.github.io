import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const focusAreas = [
  'Software and enterprise documentation',
  'Developer-facing content',
  'Information architecture',
  'Docs-as-Code workflows',
  'Accessibility and content quality',
  'AI-assisted documentation practices',
];

const projects = [
  {
    number: '01',
    type: 'FINTECH · DEVELOPER DOCUMENTATION',
    title: 'Documentation for fiscalization services',
    description:
      'Developer guides, integration workflows, onboarding content, and documentation-platform improvements for software services.',
    link: '/work/case-studies/fiscalization-documentation',
  },
  {
    number: '02',
    type: 'CLOUD · ENTERPRISE SOFTWARE',
    title: 'Cloud solution documentation',
    description:
      'Product documentation, end-user guidance, troubleshooting content, release notes, and accessibility initiatives.',
    link: '/work/case-studies/cloud-documentation',
  },
  {
    number: '03',
    type: 'POS · USER AND TECHNICAL DOCUMENTATION',
    title: 'Point-of-sale system documentation',
    description:
      'Structured documentation translating developer specifications into guidance for technical and operational audiences.',
    link: '/work/case-studies/pos-documentation',
  },
];

export default function Home() {
  return (
    <Layout
      title="Technical Writer"
      description="Portfolio of Débora Gracio, Technical Writer specializing in software documentation and developer experience."
    >
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.eyebrow}>TECHNICAL WRITING · SOFTWARE · DEVELOPER EXPERIENCE</p>
            <h1>Making complex technology easier to understand.</h1>
            <p className={styles.intro}>
              I’m Débora, a Technical Writer with 15+ years of experience creating
              and maintaining documentation for software, cloud, enterprise, and
              fintech products.
            </p>
            <p className={styles.supporting}>
              I work across the documentation lifecycle — from research and
              information architecture to writing, review, and publishing —
              partnering with engineering, product, and subject-matter experts.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/work">
                Explore selected work
              </Link>
              <Link className="button button--outline button--primary button--lg" to="/about">
                About me
              </Link>
            </div>
            <p className={styles.location}>Based in Budapest, Hungary · Open to relocation</p>
          </div>
        </section>

        <section className="container section">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHAT I BRING</p>
            <h2>Clear content. Thoughtful structure. Useful documentation.</h2>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map((item, index) => (
              <div className={styles.focusItem} key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.workSection} section`}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>SELECTED EXPERIENCE</p>
              <h2>Documentation across products and industries.</h2>
              <p>
                A selection of professional case studies. Proprietary materials
                are not reproduced; each case study focuses on responsibilities,
                methods, and transferable skills.
              </p>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article className={styles.projectCard} key={project.number}>
                  <span className={styles.projectNumber}>{project.number}</span>
                  <p className={styles.projectType}>{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={project.link}>Read case study <span aria-hidden="true">→</span></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className={styles.sampleCallout}>
            <div>
              <p className={styles.eyebrow}>INDEPENDENT WORK</p>
              <h2>Writing samples and practical demonstrations</h2>
              <p>
                Original examples created for this portfolio to demonstrate
                documentation structure, clarity, and technical communication.
              </p>
            </div>
            <Link className="button button--primary" to="/samples">
              View writing samples
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}