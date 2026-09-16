import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import { Icon, iconNames, iconSections, type IconName, type IconSection } from './Icon';
import styles from './FoundationIcons.module.css';

const ICON_SIZES = [14, 16, 20, 24, 32, 36] as const;

const meta = {
  title: 'Foundations/Icons',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    previewWidth: 'none',
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: 'select',
      options: [...ICON_SIZES],
    },
  },
  args: {
    name: 'chevronRight',
    size: 24,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className={styles.preview}>
        <Story />
      </div>
    ),
  ],
};

function Gallery({ sectionFilter }: { sectionFilter?: IconSection }) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const sections = (Object.keys(iconSections) as IconSection[]).filter(
    (s) => !sectionFilter || s === sectionFilter,
  );

  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Icons</h1>
        <p>
          MLDS 4.0 icon set from Figma ({iconNames.length} icons). Navigation and Controls
          sections, 24×24 artboards. Color via <code>currentColor</code> / theme tokens.
        </p>
      </div>
      <input
        className={styles.search}
        type="search"
        placeholder="Search icons…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search icons"
      />
      {sections.map((section) => {
        const names = iconSections[section].filter((n) => !q || n.toLowerCase().includes(q));
        return (
          <section key={section} className={styles.section} aria-labelledby={`icons-${section}`}>
            <h2 id={`icons-${section}`} className={styles.heading}>
              {section}
            </h2>
            <p className={styles.count}>
              {names.length} of {iconSections[section].length} icons
            </p>
            {names.length === 0 ? (
              <p className={styles.empty}>No icons match “{query}”.</p>
            ) : (
              <div className={styles.grid}>
                {names.map((name) => (
                  <div key={name} className={styles.card}>
                    <span className={styles.glyph}>
                      <Icon name={name as IconName} size={24} title={name} />
                    </span>
                    <span className={styles.label}>{name}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export const AllIcons: Story = {
  render: () => <Gallery />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: 'Icons' })).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument();
    await expect(canvas.getByRole('heading', { name: 'Controls' })).toBeInTheDocument();
    const search = canvas.getByRole('searchbox', { name: 'Search icons' });
    await userEvent.clear(search);
    await userEvent.type(search, 'chevron');
    await expect(canvas.getByText('chevronLeft')).toBeInTheDocument();
    await expect(canvas.queryByText('checkboxChecked')).not.toBeInTheDocument();
  },
};
