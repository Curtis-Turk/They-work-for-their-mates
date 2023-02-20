export const combineMpData = (mpData, mpPartyData) => {
  // mpData.FirstName + mpData.LastName === mpPartyData.$.membername;
  // loop through MpData
  // for each Data, loop through mpPartyData,
  // if match, add to mpData,
  // continue, etc
  let combinedData = [];

  mpData.forEach((mp) => {
    mpPartyData.forEach((mpParty) => {
      if (mp.$.membername !== `${mpParty.FirstName} ${mpParty.LastName}`)
        return;
      let combinedMpData = mp;
      combinedMpData.mpInfo = mpParty;
      combinedData.push(combinedMpData);
    });
  });
  return combinedData;
};
