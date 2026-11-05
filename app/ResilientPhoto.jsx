'use client';
import { useState } from 'react';

export default function ResilientPhoto({ src, fallback, alt, loading = 'lazy' }) {
  const [failed, setFailed] = useState(false);
  return <img
    src={failed ? fallback : src}
    alt={alt}
    loading={loading}
    onError={() => { if (!failed) setFailed(true); }}
    decoding="async"
  />;
}
