import type { Meta, StoryObj } from '@storybook/react-vite';
import { primitives, spacingTokens, borderTokens, radiusTokens } from './primitives';
import styles from './FoundationTable.module.css';

const meta = {
  title: 'Foundations/Primitives',
  parameters: {
    layout: 'fullscreen',
    previewWidth: 'none',
  },
} satisfies Meta;

export default meta;

const colorCategories = Array.from(new Set(primitives.map((p) => p.category)));

export const Colors: StoryObj = {
  render: () => (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>Primitives</h1>
        <p>
          Base color primitives from the Primitive collection ({primitives.length} tokens).
          Semantic tokens reference these values via CSS variable aliases.
        </p>

        {colorCategories.map((category) => (
          <div key={category}>
            <h2 className={styles.heading}>{category}</h2>
            <ColorTable tokens={primitives.filter((p) => p.category === category)} />
          </div>
        ))}
      </section>
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>Spacing</h1>
        <p>Spacing primitives from the Primitive collection ({spacingTokens.length} tokens).</p>

        <SpacingTable tokens={spacingTokens} />
      </section>
    </div>
  ),
};

export const Border: StoryObj = {
  render: () => (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>Border</h1>
        <p>Border width primitives from the Primitive collection.</p>

        <BorderTable tokens={borderTokens} />
      </section>
    </div>
  ),
};

export const Radius: StoryObj = {
  render: () => (
    <div className={styles.container}>
      <section className={styles.section}>
        <h1>Radius</h1>
        <p>Border radius primitives from the Primitive collection.</p>

        <RadiusTable tokens={radiusTokens} />
      </section>
    </div>
  ),
};

function ColorTable({ tokens }: { tokens: typeof primitives }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.valueCol}>CSS Variable</th>
            <th className={styles.valueCol}>Value</th>
            <th className={styles.previewCol}>Preview</th>
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
                <code className={styles.code}>{token.value}</code>
              </td>
              <td className={styles.previewCell}>
                <div
                  className={styles.colorSwatch}
                  style={{ backgroundColor: `var(${token.variable})` }}
                  title={token.value}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SpacingTable({ tokens }: { tokens: typeof spacingTokens }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.valueCol}>CSS Variable</th>
            <th className={styles.valueCol}>Value</th>
            <th className={styles.previewCol}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => {
            const numeric = parseFloat(token.value);
            const abs = Math.abs(numeric);
            return (
              <tr key={token.variable}>
                <td className={styles.nameCell}>{token.name}</td>
                <td className={styles.valueCell}>
                  <code className={styles.variable}>{token.variable}</code>
                </td>
                <td className={styles.valueCell}>
                  <code className={styles.code}>{token.value}</code>
                </td>
                <td className={styles.previewCell}>
                  <div
                    style={{
                      width: abs > 0 ? `${abs}px` : '2px',
                      height: 24,
                      background: numeric < 0 ? '#fca5a5' : '#3b82f6',
                      borderRadius: 4,
                    }}
                    title={token.value}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BorderTable({ tokens }: { tokens: typeof borderTokens }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.valueCol}>CSS Variable</th>
            <th className={styles.valueCol}>Value</th>
            <th className={styles.previewCol}>Preview</th>
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
                <code className={styles.code}>{token.value}</code>
              </td>
              <td className={styles.previewCell}>
                <div
                  style={{
                    width: 80,
                    height: 24,
                    background: '#f5f5f5',
                    borderTop: `${token.value} solid #000`,
                  }}
                  title={token.value}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RadiusTable({ tokens }: { tokens: typeof radiusTokens }) {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.nameCol}>Name</th>
            <th className={styles.valueCol}>CSS Variable</th>
            <th className={styles.valueCol}>Value</th>
            <th className={styles.previewCol}>Preview</th>
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
                <code className={styles.code}>{token.value}</code>
              </td>
              <td className={styles.previewCell}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: '#3b82f6',
                    borderRadius: token.value,
                  }}
                  title={token.value}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
