export default async function handler(req, res) {

 const {currency, start_date, end_date} = req.query;
 const url = 'https://economia.awesomeapi.com.br/json/daily/';
 const result = await fetch(url+currency+'?start_date='+start_date+'&end_date='+end_date); 
 const data = await result.json();
 res.status(200).json(data)
}