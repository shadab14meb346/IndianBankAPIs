## How to use these APIs.
### 1.You can use the endpoints of APIs I have already deployed on heroku.
You can use the APIs to get Indian banks details. The documentation of API is hosted here.
https://documenter.getpostman.com/view/4743025/SztEZS26?version=latest  
I am using the free heroku plan and the free mlab plan for mongodb. So I am not sure if it can handle too many requests.
### 2.You can yourself clone and deploy this repo somewhere.
If you yourself deploy this repo somewhere then you can use your instance of deployed APIs endpoints. Documentation is in point 1.

Example of APIs how to get data.
These are the Indian Bank APIs to get various information regarding Indian banks.
1. https://shadab14meb346-indian-bank-server.glitch.me/get-total-no-of-each-banks  
This endpoint doesn't take any query parameters and returns all banks in India and it's each banks total count.
2. https://shadab14meb346-indian-bank-server.glitch.me/get-bank-details?ifsccode=YESB0000676  
This endpoint take a single query parameter ```ifsccode``` and return bank details.
3. ```https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-states-bank-available-in?bank_name=ZILA SAHAKRI BANK LIMITED GHAZIABAD``` 
This endpoint take a single query parameter ```bank_name``` and returns an array of all states that bank is available.You need to pass bank name exactly in the format what you got in the ```get-total-no-of-each-banks``` route.
4. ```https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-districts-bank-available-in?bank_name=ZILA SAHAKRI BANK LIMITED GHAZIABAD&state=UTTAR PRADESH```
This endpoint take two query parameter ```bank_name``` and ```state``` and returns an array of all states the passed bank is available.```state``` value can be any state or Union territory spelled as following ```ANDAMAN AND NICOBAR ISLAND,ANDHRA PRADESH,ARUNACHAL PRADESH,ASSAM,BIHAR,CHANDIGARH,CHATTISGARH,DADRA AND NAGAR HAVELI,DAMAN AND DIU,DELHI,GOA,GUJARAT,HARYANA,HIMACHAL PRADESH,JAMMU AND KASHMIR,JHARKHAND,KARNATAKA,KERALA,LAKSHADWEEP,MADHYA PRADESH,MAHARASHTRA,MANIPUR,MEGHALAYA,MIZORAM,NAGALAND,ODISHA,PUDUCHERRY,PUNJAB,RAJASTHAN,SIKKIM,TAMIL NADU,TELANGANA,TRIPURA,UTTAR PRADESH,UTTARAKHAND,WEST BENGAL``` 
5. ```https://shadab14meb346-indian-bank-server.glitch.me/get-list-of-all-bank-branch-available-in?bank_name=ZILA SAHAKRI BANK LIMITED GHAZIABAD&state=UTTAR PRADESH&district=GHAZIABAD```
This endpoint take three query parameter ```bank_name```,```state``` and ```district```.It returns an array of all branches of the passed banks available in the given district.You need to pass bank name and state in similar manner and distict name should be in uppercase.

for any isses or suggestion please let me know.
shadab14meb346@gmail.com

[my portfolio](https://www.shadab.info/)
