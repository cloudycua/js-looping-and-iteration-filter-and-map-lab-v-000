function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  let driverNames = [];
  driversWithRevenueOver(drivers, revenue).filter(function(driver) {
    driverNames.push(driver.name);
  });
  return driverNames;
}
