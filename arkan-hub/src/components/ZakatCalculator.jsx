'use client'
import { useState } from 'react'

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
      </div>
    </div>
  )
}
