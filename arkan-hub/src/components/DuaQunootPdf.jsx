'use client'

import { DownloadIcon } from './Icons'

export default function DuaQunootPdfButton({ arabicText, urduTranslation }) {
  const handleDownload = () => {
    const html = `<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="utf-8">
<title>Dua e Qunoot - Arkans of Islam</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Inter:wght@400;500;600&display=swap');
  @page { size: A4 portrait; margin: 16mm 16mm 18mm 16mm; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Noto Naskh Arabic', 'Traditional Arabic', serif; background: #fff; color: #1a1a2e; }
  .header { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 14px 0 12px; border-bottom: 2px solid #c9a84c; margin-bottom: 16px; direction: ltr; }
  .header img { width: 40px; height: 40px; object-fit: contain; }
  .header-text { font-family: 'Inter', sans-serif; }
  .header-title { font-size: 16px; font-weight: 600; color: #1a1a2e; letter-spacing: 0.5px; }
  .header-sub { font-size: 10px; color: #666; font-weight: 400; }
  .title-block { text-align: center; margin: 20px 0 6px; }
  .page-title-en { font-size: 26px; font-weight: 700; color: #c9a84c; font-family: 'Inter', sans-serif; direction: ltr; }
  .page-title-ur { font-size: 26px; font-weight: 700; color: #c9a84c; font-family: 'Noto Nastaliq Urdu', 'Noto Naskh Arabic', serif; direction: rtl; margin-top: 2px; }
  .arabic-block { background: #f8f6f0; border: 1px solid #e8e0cc; border-radius: 12px; padding: 28px 24px; margin: 20px auto 20px; text-align: center; line-height: 2.4; }
  .arabic-text { font-size: 26px; font-weight: 700; color: #1a1a2e; direction: rtl; }
  .section-label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: #c9a84c; text-transform: uppercase; letter-spacing: 1px; margin: 16px 0 8px; text-align: center; direction: ltr; }
  .urdu-block { background: #faf9f5; border: 1px solid #e8e0cc; border-radius: 12px; padding: 24px 24px; margin: 0 auto; text-align: center; direction: rtl; }
  .urdu-text { font-family: 'Noto Nastaliq Urdu', 'Noto Naskh Arabic', 'Jameel Noori Nastaleeq', serif; font-size: 20px; font-weight: 400; color: #2a2a2a; line-height: 2.2; }
  .footer { border-top: 1px solid #e0e0e0; padding-top: 10px; margin-top: 20px; text-align: center; direction: ltr; font-family: 'Inter', sans-serif; }
  .footer-text { font-size: 9px; color: #999; }
  .footer-url { font-size: 10px; color: #c9a84c; font-weight: 500; }
</style>
</head>
<body>
<div class="header">
  <img src="/arkan-logo-2.png" alt="Arkan" crossorigin>
  <div class="header-text">
    <div class="header-title">Arkans of Islam</div>
    <div class="header-sub">Islamic Knowledge, Structured</div>
  </div>
</div>

<div class="title-block">
  <div class="page-title-en">Dua e Qunoot</div>
  <div class="page-title-ur">دعائے قنوت</div>
</div>

<div class="arabic-block">
  <div class="arabic-text">\${arabicText}</div>
</div>

<div class="section-label">Urdu Translation</div>
<div class="urdu-block">
  <div class="urdu-text">\${urduTranslation}</div>
</div>

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
        }, 500)
      }
      img.onerror = () => {
        logoImg.remove()
        setTimeout(() => printWindow.print(), 500)
      }
      img.src = '/arkan-logo-2.png'
    } else {
      setTimeout(() => printWindow.print(), 500)
    }
  }

  return (
    <button className="btn-gold dl-cta-btn" onClick={handleDownload} type="button">
      <DownloadIcon /> Download Dua e Qunoot PDF
    </button>
  )
}
