interface DataObj {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}

const totalPrice = ({
  price,
  discount,
  isInstallment,
  months,
}: DataObj): number => {
  const priceWithDiscont = (price * (100 - discount)) / 100;

  if (isInstallment) {
    return priceWithDiscont / months;
  }
  return priceWithDiscont;
};

const res = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(res); // 6250
