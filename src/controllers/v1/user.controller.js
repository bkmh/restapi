const get = (req, res, next) => {

    console.log(req.query)
    
    try {

        return res.json({message: 'users get'});
        
    } catch (e) {
        next(e)
    }
  }
  
  export {
    get
  }