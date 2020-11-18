console.log("util.js using")
export default function formatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " ";
  }