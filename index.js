function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  const driverNames = [];
  for (let name in driversWithRevenueOver(drivers)) {
    driverNames.push(name);
  }
}
