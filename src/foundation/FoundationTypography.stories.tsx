import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { typographyTokens, TYPOGRAPHY_MODES, TYPE_SAMPLES, type TypographyMode } from './typography';
import styles from './FoundationTable.module.css';

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
    previewWidth: 'none',
  },
} satisfies Meta;

export default meta;

const tokenCategories = Array.from(new Set(typographyTokens.map((t) => t.category)));

export const Typography: StoryObj = {
  render: () => {
    const [mode, setMode] = useState<TypographyMode>('Standard (default)');

    return (
      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Typography</h1>
          <p>
            Typography tokens from the Typography collection ({typographyTokens.length} tokens).
            The Typography collection has {TYPOGRAPHY_MODES.length} modes for accessibility scaling. Switch modes to see how values change.
          </p>

          <div style={{ marginBottom: 32 }}>
            <label style={{ fontSize: 14, fontWeight: 600, marginRight: 12 }}>Mode:</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as TypographyMode)}
              style={{
                padding: '8px 12px',
                fontSize: 14,
                border: '1px solid #e0e0e0',
                borderRadius: 6,
                background: 'white',
              }}
            >
              {TYPOGRAPHY_MODES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {tokenCategories.map((cat) => (
            <div key={cat}>
              <h2 className={styles.heading}>{cat}</h2>
              <TokenTable
                tokens={typographyTokens.filter((t) => t.category === cat)}
                mode={mode}
              />
            </div>
          ))}

          <h2 className={styles.heading}>Type Scale Samples ({mode})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {TYPE_SAMPLES.map((sample) => (
              <div
                key={sample.key}
                style={{
                  padding: 24,
                  border: '1px solid #e0e0e0',
                  borderRadius: 8,
                  background: 'white',
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: '#999',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    marginBottom: 8,
                  }}
                >
                  {sample.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-family-font-name), sans-serif',
                    fontSize: `${sample.sizes[mode]}px`,
                    lineHeight: `${sample.lineHeights[mode]}px`,
                    fontWeight: sample.weight,
                    letterSpacing: sample.letterSpacing,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div style={{ fontSize: 12, color: '#666', marginTop: 12, fontFamily: 'monospace' }}>
                  size: {sample.sizes[mode]}px · lh: {sample.lineHeights[mode]}px · weight:{' '}
                  {sample.weight} ({sample.weightVariable}) · tracking: {sample.letterSpacing}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};

function TokenTable({
  tokens,
  mode,
}: {
  tokens: typeof typographyTokens;
  mode: TypographyMode;
}) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '35%' }}>Name</th>
            <th style={{ width: '35%' }}>CSS Variable</th>
            <th style={{ width: '30%' }}>Value ({mode})</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.variable}>
              <td className={styles.nameCell}>{token.name}</td>
              <td className={styles.valueCell}>
                <code className={styles.variable}>{token.variable}</code>
              </td>
              <td className={styles.valueCell}>
                <code className={styles.code}>{token.values[mode]}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
