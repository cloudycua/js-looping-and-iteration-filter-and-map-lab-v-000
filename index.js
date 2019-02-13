function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  const driverNames = [];
  driverNames.push(drivers.filter(function(driver){
    if (driver.revenue > revenue) {
      return driver.name;
    };
  }));
}
