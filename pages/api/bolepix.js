export default async function handler(req, res) {
     
    const {content, url, method, headers} = req.body; 
    const statusResultOK = 200;
    const result = await fetch(url, {
        headers: headers,
        method: method,
        body: JSON.stringify(content) 
    }).then(data => {
        const { status, statusText} = data;
        
        if (status != statusResultOK ){            
          return {status, body: { status, statusText} };
        }
        return {status, body: data.body };  
        
    }); 
    const {status, body} = result; 
    res.status(status).json(body);
}