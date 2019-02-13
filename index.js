function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver(drivers, revenue) {
  const driverNames = [];
  drivers.filter(function(driver){
    if (driver.revenue > revenue) {
      driverNames.push(driver.name);
    };
  }));
}
