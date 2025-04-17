import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Label } from '../components/ui/Label';

export default function CalculatorForm() {
  const [revenue, setRevenue] = useState('');
  const [aliquot, setAliquot] = useState('');
  const [deduction, setDeduction] = useState('');
  const [result, setResult] = useState(null);

  const calculateTax = () => {
    const r = parseFloat(revenue);
    const a = parseFloat(aliquot) / 100;
    const d = parseFloat(deduction);
    if (!isNaN(r) && !isNaN(a) && !isNaN(d)) {
      const tax = ((r * a) - d).toFixed(2);
      setResult(tax >= 0 ? tax : 0);
    } else {
      setResult(null);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="revenue">Faturamento Bruto Mensal (R$)</Label>
          <Input id="revenue" value={revenue} onChange={(e) => setRevenue(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="aliquot">Alíquota (%)</Label>
          <Input id="aliquot" value={aliquot} onChange={(e) => setAliquot(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="deduction">Parcela a Deduzir (R$)</Label>
          <Input id="deduction" value={deduction} onChange={(e) => setDeduction(e.target.value)} />
        </div>
        <Button onClick={calculateTax} className="w-full">Calcular</Button>
        {result !== null && (
          <div className="text-green-700 text-center font-bold">Imposto estimado: R$ {result}</div>
        )}
      </CardContent>
    </Card>
  );
}
