/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalRent = 0;
  let discount = 0;

  for (let i = 0; i < days; i++) {
    totalRent = totalRent + 40;
  }

  if (days >= 3) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return totalRent - discount;
}

module.exports = calculateRentalCost;
