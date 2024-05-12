const express = require('express');
const app = express();

// Define routes and middleware here
// ...

const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.json({
        msg:"hi there"
    })
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});