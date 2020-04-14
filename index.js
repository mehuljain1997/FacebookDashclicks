let express=  require('express')
let app =  express();
var FB = require('fb');

/*
const access_token = 'EAAPZCNHAd8DUBAHSpHGUY5y0F7a1NWI071zVSl74ETOzpqJGeeZCXGjnwWJLKzeyFTHa2AS5ngM4HVmZCm9Lil6NbKfLIJ5n1KIDWXUvJGUIzSZC8fXuuKhcFsa2M99hyTK7VK9czU1D64HScOGbK60cYdkxtboWjrF2Vv9iQiZBO96gk24DNct0cSYGZAW3QSGT79le8npgZDZD';
const app_id = '1125025614524469';
const id = '884955111931148';
*/


/* read campaign */

const adsSdk = require('facebook-nodejs-business-sdk');
const accessToken = 'EAAPZCNHAd8DUBAHSpHGUY5y0F7a1NWI071zVSl74ETOzpqJGeeZCXGjnwWJLKzeyFTHa2AS5ngM4HVmZCm9Lil6NbKfLIJ5n1KIDWXUvJGUIzSZC8fXuuKhcFsa2M99hyTK7VK9czU1D64HScOGbK60cYdkxtboWjrF2Vv9iQiZBO96gk24DNct0cSYGZAW3QSGT79le8npgZDZD';
const api = adsSdk.FacebookAdsApi.init(accessToken);
const AdAccount = adsSdk.AdAccount;
const account = new AdAccount('884955111931148');


  app.get('/readcreate',function(req, res){
  
    account
      .read([AdAccount.Fields.name, AdAccount.Fields.age])
      .then((account) => {
        console.log(account);
      })
      .catch((error) => {
      });
 
    res.send('read succesfully');
  })



app.get('/createcampaign',function(req, res){
  
  // create campaign 
account
  .createCampaign(
    [],
    {
      [Campaign.Fields.name]: 'mycampaign8000',
      [Campaign.Fields.status]: Campaign.Status.paused,
      [Campaign.Fields.objective]: Campaign.Objective.page_likes
    }
  )
  .then((campaign) => {
  })
  .catch((error) => {
  });

  
  res.send('create succesfully');
})

app.get('/updatecampaign',function(req, res){

  // update campaign 
const campaignId = 23844662071610708;
new Campaign(campaignId, {
  [Campaign.Fields.id]: campaign.id,
  [Campaign.Fields.name]: 'CampaignUpdated' })
  .update().then((res) =>
  {
 console.log('res in then',res)
  }).catch((err) =>  {
console.log('err in catch',err)
  })

 
  res.send('updated succesfully');
})


app.get('/deletecreate',function(req, res){
   // delete campaign

   const campaignId = 23844661883090708;
   new Campaign(campaignId).delete().then((res) =>
   {
     console.log('red',res);
   }).catch((err) =>
   {
     console.log('err',err)
   })
  
  res.send('deleted succesfully');
})






FB.api('/1125025614524469?access_token=EAAPZCNHAd8DUBAHSpHGUY5y0F7a1NWI071zVSl74ETOzpqJGeeZCXGjnwWJLKzeyFTHa2AS5ngM4HVmZCm9Lil6NbKfLIJ5n1KIDWXUvJGUIzSZC8fXuuKhcFsa2M99hyTK7VK9czU1D64HScOGbK60cYdkxtboWjrF2Vv9iQiZBO96gk24DNct0cSYGZAW3QSGT79le8npgZDZD', function(response) {
    console.log('xyz',response);
  });


FB.api('https://www.facebook.com/adsmanager/manage/campaigns?act=884955111931148', function(response){
  console.log('output',response)
})

FB.api('https://www.facebook.com/adsmanager/manage/adsets?act=884955111931148&selected_campaign_ids=23844662071610708', function(response){
  console.log('output1',response)
})


app.listen(8080,function(){
    console.log('application started');
})