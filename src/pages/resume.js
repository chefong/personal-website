import { useEffect } from 'react';
import Router from 'next/router';

export default function Resume() {
  useEffect(() => Router.push("/docs/EricOngResume.pdf"), []);
  return null;
}