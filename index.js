const employee = {
    name: "Lo",
    streetAddress: "666 Marshall ln",
  };

  function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = { ...object};

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    
    return object;
}

function deleteFromEmployeeByKey(obejct, key) {
    const newObj = {...obejct};
    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obejct, key) {
    delete obejct[key];

    return obejct;
}