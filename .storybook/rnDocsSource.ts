import type { StoryContext } from 'storybook/internal/csf'

/** Props that are Storybook wiring / web chrome — omit from RN-oriented Docs snippets. */
const OMIT_ARGS = new Set([
  'className',
  'style',
  'trailing',
  'leading',
  'leftIcon',
  'centreIcon',
  'centre',
  'iconButton1',
  'iconButton2',
  'iconButton3',
  'hero',
  'tabs',
  'onBack',
  'onMenu',
  'onTabChange',
  'onInfo',
  'onEye',
  'onIndexInfo',
  'onChange',
])

function componentName(context: StoryContext): string {
  const c = context.component as { displayName?: string; name?: string } | undefined
  const fromTitle = context.title?.split('/').pop()
  return c?.displayName || c?.name || fromTitle || 'Component'
}

function formatValue(value: unknown): string | null {
  if (value === undefined || value === null) return null
  if (typeof value === 'function') return null
  if (typeof value === 'string') return JSON.stringify(value)
  if (typeof value === 'boolean' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) {
    try {
      return JSON.stringify(value)
    } catch {
      return null
    }
  }
  if (typeof value === 'object') return null
  return null
}

/**
 * Build a clean, RN-portable Docs snippet from story args.
 * Web preview stays as-is; Docs source shows the public prop API only.
 */
export function transformToRnSource(
  _code: string,
  context: StoryContext,
): string {
  const name = componentName(context)
  const args = { ...(context.args ?? {}) }
  const childText =
    typeof args.children === 'string' && args.children.trim() ? args.children : null
  delete args.children

  const lines: string[] = []
  for (const [key, value] of Object.entries(args)) {
    if (OMIT_ARGS.has(key)) continue
    if (value === undefined || value === null || value === '') continue
    const formatted = formatValue(value)
    if (formatted === null) continue
    lines.push(`  ${key}={${formatted}}`)
  }

  const importLine = `import { ${name} } from '@mlds/${name}';`
  if (childText) {
    const props = lines.length ? `\n${lines.join('\n')}\n` : ' '
    return `${importLine}\n\n<${name}${props}>\n  ${childText}\n</${name}>`
  }
  if (lines.length === 0) {
    return `${importLine}\n\n<${name} />`
  }
  return `${importLine}\n\n<${name}\n${lines.join('\n')}\n/>`
}
