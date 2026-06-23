import { cn } from '@/lib/utils'

type ModulePreviewProps = {
  variant?: 'dashboard' | 'transactions' | 'inventory' | 'reports'
  className?: string
}

export function ModulePreview({ variant = 'dashboard', className }: ModulePreviewProps) {
  return (
    <div className={cn('overflow-hidden bg-card', className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/35 px-4 py-2">
        <div className="size-2.5 bg-red-600" />
        <div className="size-2.5 bg-yellow-500" />
        <div className="size-2.5 bg-green-600" />
        <span className="text-muted-foreground ms-2 text-xs font-medium uppercase">Kokonaat Admin</span>
      </div>
      <div className="p-4">
        {variant === 'dashboard' && <DashboardMock />}
        {variant === 'transactions' && <TransactionsMock />}
        {variant === 'inventory' && <InventoryMock />}
        {variant === 'reports' && <ReportsMock />}
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {['Sales', 'Expenses', 'Stock'].map((label) => (
          <div key={label} className="border border-border bg-muted/35 p-2">
            <p className="text-muted-foreground text-[10px] font-medium uppercase">{label}</p>
            <p className="text-sm font-semibold">৳ 1,24,500</p>
          </div>
        ))}
      </div>
      <div className="border border-border p-3">
        <p className="mb-2 text-xs font-medium uppercase">Sales trend</p>
        <div className="flex h-16 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              className="bg-primary flex-1"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TransactionsMock() {
  const rows = [
    ['SALE', 'Customer A', '৳ 1,500'],
    ['PURCHASE', 'Vendor B', '৳ 3,200'],
    ['RECEIVABLE', 'Customer C', '৳ 800'],
  ]
  return (
    <div className="overflow-hidden border border-border text-xs">
      <div className="bg-muted/35 grid grid-cols-3 gap-2 px-3 py-2 font-medium uppercase">
        <span>Type</span>
        <span>Party</span>
        <span className="text-end">Amount</span>
      </div>
      {rows.map(([type, party, amount]) => (
        <div key={type + party} className="grid grid-cols-3 gap-2 border-t border-border px-3 py-2">
          <span className="font-medium">{type}</span>
          <span className="text-muted-foreground truncate">{party}</span>
          <span className="text-end font-medium">{amount}</span>
        </div>
      ))}
    </div>
  )
}

function InventoryMock() {
  return (
    <div className="space-y-2 text-xs">
      {[
        ['Rice 25kg', '120', '৳ 1,200'],
        ['Oil 5L', '45', '৳ 650'],
        ['Sugar 1kg', '200', '৳ 95'],
      ].map(([name, qty, price]) => (
        <div key={name} className="flex items-center justify-between border border-border px-3 py-2">
          <span className="font-medium">{name}</span>
          <span className="text-muted-foreground">Qty: {qty}</span>
          <span className="font-medium">{price}</span>
        </div>
      ))}
    </div>
  )
}

function ReportsMock() {
  return (
    <div className="grid grid-cols-2 gap-2 text-xs">
      {['Balance Sheet', 'Stock Report', 'Expense Report', 'Customer Ledger'].map((r) => (
        <div key={r} className="border border-border bg-muted/35 p-3 text-center font-medium uppercase">
          {r}
        </div>
      ))}
    </div>
  )
}
