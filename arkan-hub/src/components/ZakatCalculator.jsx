'use client'
import { useState } from 'react'
import { DownloadIcon } from './Icons'

const ASSET_FIELDS = [
  { key: 'goldSilver', label: 'Gold & Silver', hint: 'Current market value of all gold and silver you own' },
  { key: 'cash', label: 'Cash & Bank Balances', hint: 'Cash in hand, checking, and savings accounts' },
  { key: 'investments', label: 'Investments & Stocks', hint: 'Stocks, mutual funds, crypto, and other investments' },
  { key: 'business', label: 'Business Assets', hint: 'Inventory, merchandise, and trade goods for sale' },
  { key: 'receivables', label: 'Money Owed to You', hint: 'Loans you have given that you expect to be repaid' },
  { key: 'other', label: 'Other Assets', hint: 'Any other zakatable wealth not listed above' },
]

const DEDUCTION_FIELDS = [
  { key: 'debts', label: 'Debts You Owe', hint: 'Outstanding loans, bills, and financial obligations' },
  { key: 'expenses', label: 'Immediate Expenses', hint: 'Rent, utilities, and payments due before your zakat date' },
]

export default function ZakatCalculator() {
  const [values, setValues] = useState({})

  const parse = v => parseFloat(v) || 0
  const update = (key, val) => setValues(prev => ({ ...prev, [key]: val }))

  const totalAssets = ASSET_FIELDS.reduce((sum, f) => sum + parse(values[f.key]), 0)
  const totalDeductions = DEDUCTION_FIELDS.reduce((sum, f) => sum + parse(values[f.key]), 0)
  const netWealth = Math.max(0, totalAssets - totalDeductions)
  const zakatDue = netWealth * 0.025

  const fmt = n => {
    if (n === 0) return '0'
    return n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }

  const hasInput = Object.values(values).some(v => v !== '' && v !== undefined)

  const handleDownloadPdf = () => {
    const row = (label, value) =>
      '<tr><td>' + label + '</td><td class="val">' + value + '</td></tr>'

    const assetRows = ASSET_FIELDS.map(f => row(f.label, fmt(parse(values[f.key])))).join('')
    const deductionRows = DEDUCTION_FIELDS.map(f => row(f.label, fmt(parse(values[f.key])))).join('')

    const html = [
      '<!DOCTYPE html><html><head><meta charset="utf-8">',
      '<title>Zakat Calculation - Arkans of Islam</title>',
      '<style>',
      "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');",
      '@page { size: A4 portrait; margin: 16mm; }',
      '* { margin: 0; padding: 0; box-sizing: border-box; }',
      "body { font-family: 'Inter', system-ui, sans-serif; background: #fff; color: #1a1a2e; }",
      '.header { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 14px 0 12px; border-bottom: 2px solid #c9a84c; margin-bottom: 28px; }',
      '.header img { width: 40px; height: 40px; object-fit: contain; }',
      '.header-title { font-size: 16px; font-weight: 600; color: #1a1a2e; letter-spacing: 0.5px; }',
      '.header-sub { font-size: 10px; color: #666; }',
      '.page-title { text-align: center; font-size: 24px; font-weight: 700; color: #c9a84c; margin-bottom: 28px; }',
      '.section-label { font-size: 11px; font-weight: 600; color: #c9a84c; text-transform: uppercase; letter-spacing: 1.5px; margin: 22px 0 10px; }',
      'table { width: 100%; border-collapse: collapse; }',
      'td { padding: 7px 0; font-size: 13px; border-bottom: 1px solid #eee; }',
      'td.val { text-align: right; font-weight: 500; font-variant-numeric: tabular-nums; }',
      '.subtotal td { border-top: 2px solid #ddd; border-bottom: none; font-weight: 600; padding-top: 12px; }',
      '.result-box { background: #f8f6f0; border: 1px solid #e8e0cc; border-radius: 8px; padding: 18px 22px; margin: 28px 0; }',
      '.result-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; color: #333; }',
      '.result-row.highlight { font-size: 20px; font-weight: 700; color: #c9a84c; padding-top: 12px; border-top: 1px solid #e8e0cc; margin-top: 8px; }',
      '.nisab-note { font-size: 11px; color: #888; text-align: center; margin-top: 24px; line-height: 1.7; }',
      '.footer { border-top: 1px solid #e0e0e0; padding-top: 10px; margin-top: 28px; text-align: center; }',
      '.footer-url { font-size: 10px; color: #c9a84c; font-weight: 500; }',
      '.footer-text { font-size: 9px; color: #999; margin-top: 4px; }',
      '</style></head><body>',
      '<div class="header">',
      '  <img src="/arkan-logo-2.png" alt="Arkan" crossorigin>',
      '  <div class="header-text">',
      '    <div class="header-title">Arkans of Islam</div>',
      '    <div class="header-sub">Islamic Knowledge, Structured</div>',
      '  </div>',
      '</div>',
      '<div class="page-title">Zakat Calculation Summary</div>',
      '<div class="section-label">Your Assets</div>',
      '<table>',
      assetRows,
      '<tr class="subtotal"><td>Total Assets</td><td class="val">' + fmt(totalAssets) + '</td></tr>',
      '</table>',
      '<div class="section-label">Deductions</div>',
      '<table>',
      deductionRows,
      '<tr class="subtotal"><td>Total Deductions</td><td class="val">' + fmt(totalDeductions) + '</td></tr>',
      '</table>',
      '<div class="result-box">',
      '  <div class="result-row"><span>Net Zakatable Wealth</span><span>' + fmt(netWealth) + '</span></div>',
      '  <div class="result-row highlight"><span>Zakat Due (2.5%)</span><span>' + fmt(zakatDue) + '</span></div>',
      '</div>',
      '<div class="nisab-note">',
      '  Nisab threshold: 87.48g of gold (7.5 tola) or 612.36g of silver (52.5 tola)<br>',
      '  Zakat is obligatory when your net wealth exceeds the nisab for one full lunar year.',
      '</div>',
      '<div class="footer">',
      '  <div class="footer-url">www.arkansofislam.com/resource/zakat</div>',
      '  <div class="footer-text">Content for educational purposes only. Verify with qualified scholars.</div>',
      '</div>',
      '</body></html>',
    ].join('\n')

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
        setTimeout(() => printWindow.print(), 500)
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
    <div className="zakat-calc">
      <div className="zakat-calc-body">
        <div className="zakat-calc-section">
          <h3 className="zakat-calc-heading">Your Assets</h3>
          <p className="zakat-calc-subtext">Enter the current value of each asset in your local currency.</p>
          {ASSET_FIELDS.map(f => (
            <div key={f.key} className="zakat-field">
              <label htmlFor={`zakat-${f.key}`}>{f.label}</label>
              <input
                id={`zakat-${f.key}`}
                type="number"
                inputMode="decimal"
                min="0"
                placeholder="0"
                value={values[f.key] || ''}
                onChange={e => update(f.key, e.target.value)}
              />
              <span className="zakat-field-hint">{f.hint}</span>
            </div>
          ))}
        </div>

        <div className="zakat-calc-section">
          <h3 className="zakat-calc-heading">Deductions</h3>
          <p className="zakat-calc-subtext">Subtract debts and immediate obligations from your wealth.</p>
          {DEDUCTION_FIELDS.map(f => (
            <div key={f.key} className="zakat-field">
              <label htmlFor={`zakat-${f.key}`}>{f.label}</label>
              <input
                id={`zakat-${f.key}`}
                type="number"
                inputMode="decimal"
                min="0"
                placeholder="0"
                value={values[f.key] || ''}
                onChange={e => update(f.key, e.target.value)}
              />
              <span className="zakat-field-hint">{f.hint}</span>
            </div>
          ))}
        </div>

        <div className={`zakat-result${hasInput ? ' has-input' : ''}`}>
          <div className="zakat-result-row">
            <span>Total Assets</span>
            <span>{fmt(totalAssets)}</span>
          </div>
          <div className="zakat-result-row">
            <span>Total Deductions</span>
            <span>&minus; {fmt(totalDeductions)}</span>
          </div>
          <div className="zakat-result-divider" />
          <div className="zakat-result-row zakat-net-row">
            <span>Net Zakatable Wealth</span>
            <span>{fmt(netWealth)}</span>
          </div>
          <div className="zakat-result-row zakat-due-row">
            <span>Zakat Due (2.5%)</span>
            <span className="zakat-due-amount">{fmt(zakatDue)}</span>
          </div>
        </div>

        <p className="zakat-calc-note">
          Zakat is 2.5% of net wealth held above the nisab for one lunar year. This calculator provides an estimate &mdash; consult a scholar for specific rulings on your assets.
        </p>

        <div className="dl-cta" style={{ marginTop: '1.5rem' }}>
          <button className="btn-gold dl-cta-btn" onClick={handleDownloadPdf} type="button">
            <DownloadIcon /> Download Zakat PDF
          </button>
        </div>
      </div>
    </div>
  )
}
