import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function SimplesNacionalCalculator() {
  const [revenue, setRevenue] = useState('');
  const [aliquot, setAliquot] = useState('');
  const [deduction, setDeduction] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const faturamento = parseFloat(revenue);
    const aliquota = parseFloat(aliquot) / 100;
    const deducao = parseFloat(deduction);

    if (!isNaN(faturamento) && !isNaN(aliquota) && !isNaN(deducao)) {
      const imposto = ((faturamento * aliquota) - deducao).toFixed(2);
      setResult(imposto >= 0 ? imposto : 0);
    } else {
      setResult(null);
    }
  };

  return (
    <motion.div className="p-6 max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold mb-4 text-center">Calculadora - Simples Nacional</h1>
      <Card className="shadow-xl">
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="revenue">Faturamento Bruto Mensal (R$)</Label>
            <Input
              id="revenue"
              type="number"
              placeholder="Ex: 15000"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="aliquot">Alíquota (%)</Label>
            <Input
              id="aliquot"
              type="number"
              placeholder="Ex: 6"
              value={aliquot}
              onChange={(e) => setAliquot(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="deduction">Parcela a Deduzir (R$)</Label>
            <Input
              id="deduction"
              type="number"
              placeholder="Ex: 500"
              value={deduction}
              onChange={(e) => setDeduction(e.target.value)}
            />
          </div>
          <Button onClick={handleCalculate} className="w-full mt-2">Calcular</Button>
          {result !== null && (
            <div className="text-center text-lg font-semibold text-green-700">
              Valor aproximado do imposto: R$ {result}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
