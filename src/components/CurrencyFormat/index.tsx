interface CurrencyFormatProps {
  value: number;
  decimalScale?: number;
  className?: string;
}

const CurrencyFormat = ({ value, decimalScale = 2, className }: CurrencyFormatProps) => {
  const options = {
    style: 'currency',
    currency: 'BRL',
    useGrouping: true,
    minimumFractionDigits: decimalScale
  };

  return (
    <span className={className} data-testid='currency'>
      {new Intl.NumberFormat('pt-BR', options).format(value)}
    </span>
  );
};

export default CurrencyFormat;
