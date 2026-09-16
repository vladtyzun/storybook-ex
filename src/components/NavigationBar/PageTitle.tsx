import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { IconEye, IconInfo, IconTick } from "./icons";
import styles from "./PageTitle.module.css";

export type PageTitleVariant = "default" | "product";

export interface PageTitleProps {
  title: string;
  /** Figma `Subtext`. `subtitle` is an alias. */
  subtext?: string;
  subtitle?: string;
  variant?: PageTitleVariant;
  showSubtext?: boolean;
  showTitleBadge?: boolean;
  titleBadge?: string;
  showIndex?: boolean;
  index?: string;
  indexLabel?: string;
  showProductImage?: boolean;
  productImage?: string;
  productImageAlt?: string;
  showInfo?: boolean;
  onInfo?: () => void;
  showProductTitle?: boolean;
  productTitle?: string;
  showEye?: boolean;
  onEye?: () => void;
  showBadge?: boolean;
  badge?: string;
  showIndexInfo?: boolean;
  onIndexInfo?: () => void;
  value?: string;
  status?: string;
  inverted?: boolean;
  className?: string;
}

export function PageTitle({
  title,
  subtext,
  subtitle,
  variant = "default",
  showSubtext = true,
  showTitleBadge = false,
  titleBadge = "On track",
  /** Figma Product: all optional chrome defaults off. */
  showIndex = false,
  index = "+$0.95 (4.82%)",
  indexLabel = "Today",
  showProductImage = false,
  productImage,
  productImageAlt = "",
  showInfo = false,
  onInfo,
  showProductTitle = false,
  productTitle,
  showEye = false,
  onEye,
  showBadge = false,
  badge = "3.64% APY",
  showIndexInfo = false,
  onIndexInfo,
  value,
  status,
  inverted = false,
  className = "",
}: PageTitleProps) {
  const copy = subtext ?? subtitle;
  const root = [variant === "product" ? styles.product : styles.block, inverted && styles.inverted, className]
    .filter(Boolean)
    .join(" ");

  if (variant === "product") {
    return (
      <div className={root}>
        {showProductImage && productImage ? (
          <img className={styles.productImage} src={productImage} alt={productImageAlt} width={48} height={48} />
        ) : null}
        <div className={styles.balance}>
          {showProductTitle ? (
            <div className={styles.productTitleRow}>
              <p className={styles.productLabel}>{productTitle ?? title}</p>
              {showTitleBadge ? (
                <Badge size="small" color="success">
                  {titleBadge}
                </Badge>
              ) : null}
              {showInfo ? (
                <Button
                  type="transparent"
                  size="small"
                  iconOnly
                  leadingIcon={<IconInfo width={20} height={20} />}
                  aria-label="Info"
                  onClick={onInfo}
                />
              ) : null}
            </div>
          ) : null}
          <div className={styles.valueRow}>
            {value ? <p className={styles.value}>{value}</p> : null}
            {showEye ? (
              <Button
                type="transparent"
                size="small"
                iconOnly
                leadingIcon={<IconEye />}
                aria-label="Show balance"
                onClick={onEye}
              />
            ) : null}
          </div>
          <div className={styles.row}>
            {showIndex ? <span className={styles.delta}>{index}</span> : null}
            {showIndex && indexLabel ? <span className={styles.meta}>{indexLabel}</span> : null}
            {showIndexInfo ? (
              <Button
                type="transparent"
                size="small"
                iconOnly
                leadingIcon={<IconInfo width={20} height={20} />}
                aria-label="Index info"
                onClick={onIndexInfo}
              />
            ) : null}
            {showBadge ? (
              <Badge size="small" color="success">
                {badge}
              </Badge>
            ) : null}
          </div>
        </div>
        {status ? (
          <p className={styles.status}>
            <IconTick />
            {status}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className={root}>
      <h1 className={styles.title}>{title}</h1>
      {showSubtext && copy ? <p className={styles.subtitle}>{copy}</p> : null}
    </div>
  );
}
