import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef } from 'react';
import { semanticTokens } from './tokens';
import styles from './FoundationTable.module.css';

const meta = {
  title: 'Foundations/Tokens',
  parameters: {
    layout: 'fullscreen',
    previewWidth: 'none',
  },
} satisfies Meta;

export default meta;

const categories = Array.from(new Set(semanticTokens.map((t) => t.category)));

export const Tokens: StoryObj = {
  render: () => (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>Tokens</h1>
        <p>
          Semantic tokens from the Tokens collection ({semanticTokens.length} tokens across{' '}
          {categories.length} categories). Each token aliases a primitive; values differ between Light Mode
          and Dark Mode.
        </p>

        {categories.map((category) => (
          <div key={category}>
            <h2 className={styles.heading}>{category}</h2>
            <TokenTable tokens={semanticTokens.filter((t) => t.category === category)} />
          </div>
        ))}
      </section>
    </div>
  ),
};

function TokenTable({ tokens }: { tokens: typeof semanticTokens }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Token</th>
            <th style={{ width: '25%' }}>Light Mode Alias</th>
            <th style={{ width: '10%' }}>Preview</th>
            <th style={{ width: '25%' }}>Dark Mode Alias</th>
            <th style={{ width: '10%' }}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <TokenRow key={token.variable} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TokenRow({ token }: { token: typeof semanticTokens[number] }) {
  const lightRef = useRef<HTMLDivElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force the dark preview swatch to render using dark mode CSS
    if (darkRef.current) {
      const parent = document.createElement('div');
      parent.setAttribute('data-theme', 'dark');
      parent.style.position = 'absolute';
      parent.style.visibility = 'hidden';
      parent.appendChild(document.createElement('div'));
      document.body.appendChild(parent);
      const computed = getComputedStyle(parent).getPropertyValue(token.variable).trim();
      if (computed) {
        darkRef.current.style.backgroundColor = computed;
      }
      document.body.removeChild(parent);
    }
  }, [token.variable]);

  return (
    <tr>
      <td className={styles.nameCell}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>{token.name}</div>
        <code className={styles.variable} style={{ fontSize: 11 }}>
          {token.variable}
        </code>
      </td>
      <td className={styles.valueCell}>
        <code className={styles.code}>{token.lightAlias}</code>
      </td>
      <td className={styles.previewCell}>
        <div
          ref={lightRef}
          className={styles.colorSwatch}
          style={{ backgroundColor: `var(${token.variable})` }}
          data-theme="light"
          title={token.lightAlias}
        />
      </td>
      <td className={styles.valueCell}>
        <code className={styles.code}>{token.darkAlias}</code>
      </td>
      <td className={styles.previewCell}>
        <div ref={darkRef} className={styles.colorSwatch} title={token.darkAlias} />
      </td>
    </tr>
  );
}
