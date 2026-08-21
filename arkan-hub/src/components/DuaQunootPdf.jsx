'use client'

import { DownloadIcon } from './Icons'

export default function DuaQunootPdfButton({ arabicText, transliteration }) {
  const handleDownload = () => {
    const html = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="utf-8">
<title>Dua e Qunoot - Arkan Directory Hub</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&family=Inter:wght@400;500;600&display=swap');
  @page { size: A4 portrait; margin: 20mm 18mm 25mm 18mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Noto Naskh Arabic', 'Traditional Arabic', 'Simplified Arabic', serif; background: #fff; color: #1a1a2e; }
  .header { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 18px 0 14px; border-bottom: 2px solid #c9a84c; margin-bottom: 20px; direction: ltr; }
  .header img { width: 44px; height: 44px; object-fit: contain; }
  .header-text { font-family: 'Inter', sans-serif; }
  .header-title { font-size: 18px; font-weight: 600; color: #1a1a2e; letter-spacing: 0.5px; }
  .header-sub { font-size: 11px; color: #666; font-weight: 400; }
  .page-title { text-align: center; font-size: 28px; font-weight: 700; color: #c9a84c; margin: 24px 0 8px; direction: ltr; font-family: 'Inter', sans-serif; }
  .page-subtitle { text-align: center; font-size: 13px; color: #666; margin-bottom: 30px; direction: ltr; font-family: 'Inter', sans-serif; }
  .arabic-block { background: #f8f6f0; border: 1px solid #e8e0cc; border-radius: 12px; padding: 32px 28px; margin: 0 auto 28px; text-align: center; line-height: 2.4; }
  .arabic-text { font-size: 28px; font-weight: 700; color: #1a1a2e; direction: rtl; }
  .section-label { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: #c9a84c; text-transform: uppercase; letter-spacing: 1px; margin: 24px 0 10px; text-align: center; direction: ltr; }
  .transliteration { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.9; color: #333; text-align: center; direction: ltr; padding: 0 12px; margin-bottom: 16px; }
  .footer { border-top: 1px solid #e0e0e0; padding-top: 14px; margin-top: 36px; text-align: center; direction: ltr; font-family: 'Inter', sans-serif; }
  .footer-text { font-size: 10px; color: #999; }
  .footer-url { font-size: 11px; color: #c9a84c; font-weight: 500; }
</style>
</head>
<body>
<div class="header">
  <img src="/arkan-logo-2.png" alt="Arkan" crossorigin>
  <div class="header-text">
    <div class="header-title">Arkan Directory Hub</div>
    <div class="header-sub">Islamic Knowledge, Structured</div>
  </div>
</div>

<div class="page-title">Dua e Qunoot</div>
<div class="page-subtitle">دعاء القنوت — The Supplication of Witr Prayer</div>

<div class="arabic-block">
  <div class="arabic-text">${arabicText}</div>
</div>

<div class="section-label">Transliteration</div>
<div class="transliteration">${transliteration}</div>

<div class="footer">
  <div class="footer-url">www.arkansofislam.com/resource/dua-qunoot</div>
  <div class="footer-text">Content for educational purposes only. Verify with qualified scholars.</div>
</div>
</body>
</html>`

    const printWindow = window.open('', '_blank')
    if (!printWindow) return
    printWindow.document.write(html)
    printWindow.document.close()

    const logoImg = printWindow.document.querySelector('img')
    if (logoImg) {
      const canvas = document.createElement('canvas')
      canvas.width = 88
      canvas.height = 88
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 88, 88)
        logoImg.src = canvas.toDataURL('image/png')
        setTimeout(() => {
          printWindow.print()
        }, 300)
      }
      img.onerror = () => {
        logoImg.remove()
        setTimeout(() => printWindow.print(), 300)
      }
      img.src = '/arkan-logo-2.png'
    } else {
      setTimeout(() => printWindow.print(), 300)
    }
  }

  return (
    <button className="btn-gold dl-cta-btn" onClick={handleDownload} type="button">
      <DownloadIcon /> Download Dua e Qunoot PDF
    </button>
  )
}
