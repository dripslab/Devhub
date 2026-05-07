import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Developer docs for Stellar"
      description="Beginner-friendly docs, examples, and guides for building on Stellar">
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Stellar developer docs</p>
            <h1>Build on Stellar with clear, practical guides.</h1>
            <p className={styles.lede}>
              devhub helps JavaScript developers move from first keypair to
              real testnet transactions with focused docs and working examples.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary', styles.button)} to="/docs/getting-started/installation">
                Start building
              </Link>
              <Link className={clsx('button button--secondary', styles.button)} to="/docs/core-concepts/accounts">
                Learn accounts
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
