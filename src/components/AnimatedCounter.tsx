import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.2,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // Show prefix + 0 + suffix initially for realistic loading feel
    const match = value.replace(/,/g, '').match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (match) {
      return `${match[1]}0${match[3]}`;
    }
    return value;
  });

  useEffect(() => {
    if (!isInView) return;

    // Detect if value has commas
    const hasCommas = value.includes(',');
    // Strip commas to parse cleanly
    const sanitized = value.replace(/,/g, '');

    // Parse numeric value, decimal places, prefix, and suffix
    const match = sanitized.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || '';
    const hasDecimal = match[2].includes('.');
    const decimalPlaces = hasDecimal ? match[2].split('.')[1].length : 0;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic/expo for natural settle
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = targetNum * easeProgress;

      let formattedNumber: string;
      if (hasDecimal) {
        formattedNumber = current.toFixed(decimalPlaces);
      } else {
        const rounded = Math.round(current);
        formattedNumber = hasCommas ? rounded.toLocaleString() : rounded.toString();
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};
